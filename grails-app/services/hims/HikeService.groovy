package hims

/**
 * Created by Sushant on 8/28/2016.
 */
class HikeService {
    def udpateHikeDeadline(){
        def hike = Hike.findByDeadLineAndHikingType(false,"One Day");
        if(hike) {
            hike.deadLine = true
            hike.save()
        }

    }
    def udpateTwoDayHikeDeadline(){
        def hike = Hike.findByDeadLineAndHikingType(false,"Two Days");
        println "----->>>>> " + hike
        if(hike) {
            hike.deadLine = true
            hike.save()
        }

    }
}
