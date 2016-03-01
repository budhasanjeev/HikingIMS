package hims

import java.sql.Time

class Route {

    String startPoint
    String finishPoint
    String difficulty
    Time estimatedTime

    static hasMany = [hike:Hike]

    static constraints = {
        startPoint(nullable: false)
        finishPoint(nullable: false)
        difficulty(nullable: false)
        estimatedTime(nullable: false)
    }
}
