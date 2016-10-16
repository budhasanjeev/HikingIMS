/* Copyright 2013-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package hims

import grails.converters.JSON
import grails.plugin.springsecurity.SpringSecurityUtils
import org.springframework.security.access.annotation.Secured
import org.springframework.security.authentication.AccountExpiredException
import org.springframework.security.authentication.CredentialsExpiredException
import org.springframework.security.authentication.DisabledException
import org.springframework.security.authentication.LockedException
import org.springframework.security.core.context.SecurityContextHolder as SCH
import org.springframework.security.web.WebAttributes

import javax.servlet.http.HttpServletResponse
import java.security.SecureRandom

@Secured('permitAll')
class LoginController {

	/**
	 * Dependency injection for the authenticationTrustResolver.
	 */
	def authenticationTrustResolver



	/**
	 * Dependency injection for the springSecurityService.
	 */
	def springSecurityService

	/**
	 * Default action; redirects to 'defaultTargetUrl' if logged in, /login/auth otherwise.
	 */
	def index() {
		if (springSecurityService.isLoggedIn()) {
			redirect uri: SpringSecurityUtils.securityConfig.successHandler.defaultTargetUrl
		}
		else {
			redirect action: 'auth', params: params
		}
	}

	def sign(){

	}


	/**
	 * Show the login page.
	 */
	def auth() {

		def config = SpringSecurityUtils.securityConfig

		if (springSecurityService.isLoggedIn()) {
			redirect uri: config.successHandler.defaultTargetUrl
			return
		}
		def hike = Hike.findByDeadLine(false);
		String view = 'auth'
		String postUrl = "${request.contextPath}${config.apf.filterProcessesUrl}"
        session.postUrl=postUrl;
		render view: view, model: [postUrl: postUrl,hike: hike,
		                           rememberMeParameter: config.rememberMe.parameter]
	}

	/**
	 * The redirect action for Ajax requests.
	 */
	def authAjax() {
		response.setHeader 'Location', SpringSecurityUtils.securityConfig.auth.ajaxLoginFormUrl
		response.sendError HttpServletResponse.SC_UNAUTHORIZED
	}

	/**
	 * Show denied page.
	 */
	def denied() {
		if (springSecurityService.isLoggedIn() &&
				authenticationTrustResolver.isRememberMe(SCH.context?.authentication)) {
			// have cookie but the page is guarded with IS_AUTHENTICATED_FULLY
			redirect action: 'full', params: params
		}
	}

	/**
	 * Login page for users with a remember-me cookie but accessing a IS_AUTHENTICATED_FULLY page.
	 */
	def full() {
		def config = SpringSecurityUtils.securityConfig
		render view: 'auth', params: params,
			model: [hasCookie: authenticationTrustResolver.isRememberMe(SCH.context?.authentication),
			        postUrl: "${request.contextPath}${config.apf.filterProcessesUrl}"]
	}

	/**
	 * Callback after a failed login. Redirects to the auth page with a warning message.
	 */
	def authfail() {

		String msg = ''
		def exception = session[WebAttributes.AUTHENTICATION_EXCEPTION]
		if (exception) {
			if (exception instanceof AccountExpiredException) {
				msg = g.message(code: "springSecurity.errors.login.expired")
			}
			else if (exception instanceof CredentialsExpiredException) {
				msg = g.message(code: "springSecurity.errors.login.passwordExpired")
			}
			else if (exception instanceof DisabledException) {
				msg = g.message(code: "springSecurity.errors.login.disabled")
			}
			else if (exception instanceof LockedException) {
				msg = g.message(code: "springSecurity.errors.login.locked")
			}
			else {
				msg = g.message(code: "springSecurity.errors.login.fail")
			}
		}

		if (springSecurityService.isAjax(request)) {
			render([error: msg] as JSON)
		}
		else {
			flash.message = msg
			redirect action: 'auth', params: params
		}
	}

	/**
	 * The Ajax success redirect url.
	 */
	def ajaxSuccess() {
		render([success: true, username: springSecurityService.authentication.name] as JSON)
	}

	/**
	 * The Ajax denied redirect url.
	 */
	def ajaxDenied() {
		render([error: 'access denied'] as JSON)
	}


	def signUp(){
		println "======>>>>>  " + params
		String username = params.firstName.toString().toLowerCase()+"_"+ params.rollNumber.toString()
		User user = new User()
		String generatedRandomPassword = new BigInteger(64, new SecureRandom()).toString(32);
		user.username = username
		user.password= generatedRandomPassword;
		user.save(flush: true, failOnError: true);

		def role = Role.get(3)

		UserRole userRole = new UserRole()
		userRole.user=user
		userRole.role = role
		userRole.save(flush: true,failOnError: true)

		Hiker hiker= new Hiker(params)
		hiker.isTerminated = false
		hiker.isInHiker = false
		hiker.user = user
		print("test")
		if (hiker.save(flush: true, failOnError: true)){
			print("another test")
			def body = "\nHello," +
					"\n\nYou (or someone pretending to be you) requested that your password be reset"+
					"\nYour new  credentials are:" +
					"\n\n\tUsername: $username" +
					"\n\tPassword: $generatedRandomPassword" +
					"\n\nYou can change this password once you login. " +
					"\n\nThanks," +
					"\nThe HelpDesk Team.";
			sendMail {
				async true
				to hiker.emailAddress
				subject "Password Set"
				text body
			}
			redirect(action: 'index')
		}
		else {
			return hiker
		}

	}
}
