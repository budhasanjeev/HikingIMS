package hims

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

@Secured('ROLE_ADMIN')
class RouteController {

    @Secured('permitAll')
    def index() {

        def routeList = Route.findAll()
        render(view: '_show',model: [route:routeList]);

    }

    def save(){
        def startTime = params.startPoint
        def finishPoint = params.finishPoint

        params.estimatedTime = params.estimatedHours+":"+params.estimatedMins
        params.startPoint = startTime.toString().toUpperCase()
        params.finishPoint = finishPoint.toString().toUpperCase()

        def route = new Route(params);

        println route

        if (route.save(flush: true, failOnError: true)){
            return render ([messageType:"Success"] as JSON)
        }
        else {
            return render ([messageType:"Error"] as JSON)
        }
    }

    def delete(){

        def route = Route.findById(params.id as long)

        route?.delete(flush: true)

        if(Route.findById(params.id as long)){
            return render ([messageType:"Error"] as JSON)
        }else{
            return render ([messageType:"Success"] as JSON)
        }

    }

    def edit(){

        def route = Route.findById(params.id as long)

        return render(route as JSON)
    }

    def update(){

        def route = Route.findById(params.id as long)

        params.estimatedTime = params.estimatedHours+":"+params.estimatedMins

        route.properties = params

        if (route.save(flush: true)){
            return render([messageType:"Success"] as JSON)
        }
        else {
            return render([messageType:"Error"] as JSON)
        }

    }
}
