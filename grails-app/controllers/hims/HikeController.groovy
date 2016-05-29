package hims

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

@Secured('ROLE_ADMIN')
class HikeController {

    @Secured('permitAll')
    def index() {

        def hikeList = Hike.findAll()
        render(view: '_show',model: [hike:hikeList]);

    }

    def save(){

        params.hikingDate = params.hikingMonth+"-"+params.hikingDay+"-"+params.hikingYear
        params.startTime  = params.startHours+":"+params.startMins+" "+params.startAmPM
        params.finishTime  = params.finishHours+":"+params.finishMins+" "+params.finishAmPM

        def hike = new Hike(params);

        if (hike.save(flush: true, failOnError: true)){
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

        def hike = Hike.findById(params.id as long)

        return render(hike as JSON)
    }

    def update(){

        def hike = Hike.findById(params.id as long)

        params.hikingDate = params.hikingMonth+"-"+params.hikingDay+"-"+params.hikingYear
        params.startTime  = params.startHours+":"+params.startMins+" "+params.startAmPM
        params.finishTime  = params.finishHours+":"+params.finishMins+" "+params.finishAmPM

        hike.properties = params

        if (hike.save(flush: true)){
            return render([messageType:"Success"] as JSON)
        }
        else {
            return render([messageType:"Error"] as JSON)
        }

    }

    def hikerList(){
        def hiker = Hiker.all;

        return render(hiker as JSON)
    }


    def addHikerHike(){

        def hike = Hike.findById(params.hikeId as long)
        def hikerList = params.list('hiker_id');

        for (String id:hikerList){

            def hikerAndHike = new HikeAndHiker();

            def hiker = Hiker.findById(id as long)
            hikerAndHike.hike = hike

            hikerAndHike.hiker = hiker

            hikerAndHike.save(flush: true)
        }

        return render([messageType:"Success"] as JSON)
    }

}
