package hims

import java.sql.Time

class Hike {

    String title
    Date hikingDate
    String hikingType
    Time startTime
    Time finishTime
    String injury

    static belongsTo = [route:Route]

    static constraints = {

        hikingDate(nullable: false)
        hikingType(nullable: false)
        startTime(nullable: false)
        finishTime(nullable: false)
        injury(nullable: true)
    }
}
