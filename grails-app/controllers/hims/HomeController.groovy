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

            else if (SpringSecurityUtils.ifAllGranted("ROLE_STUDENT")){
                println "------------"

                redirect(action: 'studentView')
            }

        }else {

            redirect(controller: 'login', action: 'auth')
        }
    }

    @Secured('ROLE_ADMIN')
    def adminView(){

        model: [hiker:Hiker.all,route:Route.all,hike:Hike.all,expense:Expense.all]
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
}
