package hims

import grails.plugin.springsecurity.SpringSecurityUtils
import grails.plugin.springsecurity.annotation.Secured

@Secured('permitAll')
class HomeController {

    def springSecurityService

    @Secured('permitAll')
    def index() {
        if (springSecurityService.isLoggedIn()){


            if(SpringSecurityUtils.ifAllGranted("ROLE_ADMIN")){

                redirect(action: 'adminView')
            }

            else if (SpringSecurityUtils.ifAllGranted("ROLE_EDITOR")){

                redirect(action: 'editorView')
            }

        }else {

            redirect(controller: 'login', action: 'auth')
        }
    }

    @Secured('ROLE_ADMIN')
    def adminView(){


    }

    @Secured('ROLE_EDITOR')
    def editorView(){

        render("This is Editor View")
    }
}
