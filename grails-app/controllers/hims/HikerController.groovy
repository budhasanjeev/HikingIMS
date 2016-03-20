package hims

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

@Secured('ROLE_ADMIN')
class HikerController {

    @Secured('permitAll')
    def index() {

        def hikerList = Hiker.findAll()
        render(view: '_show',model: [hiker:hikerList]);

        println(hikerList)
    }

    def save(){

        def hiker = new Hiker(params);
        if (hiker.save(flush: true, failOnError: true)){
            return render ([messageType:"Success"] as JSON)
        }
        else {
            return render ([messageType:"Error"] as JSON)
        }
    }

    def delete(){

        def hiker = Hiker.findById(params.id as long)

        hiker?.delete(flush: true)

        if(Hiker.findById(params.id as long)){
            return render ([messageType:"Error"] as JSON)
        }else{
            return render ([messageType:"Success"] as JSON)
        }

    }

    def edit(){

        def hiker = Hiker.findById(params.id as long)

        return render(hiker as JSON)
    }

    def update(){

        println(params.data)
        def hiker = Hiker.findById(params.id as long)

        hiker.properties = params

        if (hiker.save(flush: true)){
            return render([messageType:"Success"] as JSON)
        }
        else {
            return render([messageType:"Error"] as JSON)
        }

    }

}
