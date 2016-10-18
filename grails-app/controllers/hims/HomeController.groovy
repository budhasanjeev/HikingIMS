package hims

import grails.converters.JSON
import grails.plugin.springsecurity.SpringSecurityUtils
import grails.plugin.springsecurity.annotation.Secured

@Secured('permitAll')
class HomeController {

    def springSecurityService

    @Secured('permitAll')

    def index() {
        println "ok here"
        if (springSecurityService.isLoggedIn()){
            println "i passed the security"

            if(SpringSecurityUtils.ifAllGranted("ROLE_ADMIN")){
                println "admin"
                redirect(action: 'adminView')
            }

            else if (SpringSecurityUtils.ifAllGranted("ROLE_EDITOR")){
                println "noooooooooooooooooo!!!!!!!!!11"

                redirect(action: 'editorView')
            }

            else if (SpringSecurityUtils.ifAllGranted("ROLE_STUDENT")){
                println "------------"

                redirect(action: 'studentView')
            }

        }else {
            println "what here"
            redirect(controller: 'login', action: 'auth')
        }
    }

    @Secured('ROLE_ADMIN')
    def adminView(){

        model: [hiker:Hiker.all,route:Route.all,hike:Hike.list().reverse(),expense:Expense.list().reverse()]
    }

    @Secured('ROLE_EDITOR')
    def editorView(){

        render("This is Editor View")
    }

    @Secured('ROLE_STUDENT')
    def studentView(){
        def userId = springSecurityService.currentUser.id
        def hiker = Hiker.findByUser(User.get(userId))
        def hikeList = HikeAndHiker.findAllByHiker(hiker)?.hike
        def hikeListCount = hikeList.size()
        def hike = Hike.findByDeadLine(false)
        model:[hikerInfo: hiker,totalCount: hikeListCount, hikeList: hikeList,hike:hike]

    }
    @Secured('permitAll')
    def sendName(){
        def hiker = Hiker.get(params.hikerId as long)
        hiker.isInHiker = true;
        hiker.save(flush: true, failOnError: true)
        return render ([messageType:"Successful"] as JSON)
    }
    def changePw()
    {
        render template: '/home/changePw'
    }
    def changePassword(){
        def user = springSecurityService.currentUser
        def userId = springSecurityService.currentUser.id
        println "here ------------------------------------"
        print(user)
        print("Check = == = " + params)

        def status= validPassword(user,params.currentPassword,params.newPassword,params.repeatPassword)


        def hiker=Hiker.findByUser(user)
        print(hiker)

        def password = params.newPassword
        def trueUser = User.findById(userId)
        def userName = trueUser?.username
        print("-------"+userName)


        if(password?.length() > 20 || password?.length() < 5){

            flash.message = "Password must be between 5 and 20 characters"
            flash.messageType = "error"
            redirect( controller: "home", action: "changePassword")
        }

        if(status.equals('valid')){
            status= applyUpdatePassword(user,params.newPassword)
            flash.message ='Password Updated'
            redirect( controller: "login", action: "auth",params: [messageType: 'success'])
            def bodyOfEmail = "\nHello" +"\t"+
                    ",\n\nThis mail is to inform you  that your password has been changed"+
                    "\n\nTo log in please use the following credentials:"+
                    "\n\n\tUsername: $userName" +
                    "\n\n\tPassword: $password" +
                    "\n\nThanks,";
            sendMail {
                async true
                to hiker.emailAddress
                subject "Password Changed"
                text bodyOfEmail
            }
        }
        else {
            flash.message =status
            redirect( action: "changePw",params: [messageType: 'error'])
        }
    }

    def validPassword(def user, def password, def newPassword, def newPassword2)
    {
        print("check")
        if (!newPassword.toString().matches(newPassword2.toString())) {
            print("invalid")
            return 'Invalid current password'
        }

        boolean sameOrNot = springSecurityService.passwordEncoder.isPasswordValid(user.password, newPassword, null /*salt*/)
        println "sameOrNot = $sameOrNot"
        if (sameOrNot) {
            print("same")
            return 'New password is same as current password'
        }
        return 'valid'
    }


    def applyUpdatePassword(def user, def newPassword){
        user.password = newPassword
        if(!user.save(flush: true, failOnError: true)){
            return 'error'
        }
        else {
            return 'success'
        }
    }
}
