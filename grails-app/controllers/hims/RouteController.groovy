package hims

class RouteController {

    def save(){

        def route = new Route();

        route.startPoint  = params.startPoint
        route.finishPoint = params.finishPoint
        route.difficulty  = params.difficultyLevel
        route.estimatedTime = params.estimatedTime

        if (route.save(flush: true, failOnError: true)){
            render("Successfully Created")
        }
    }

}
