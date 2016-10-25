/**
 * Created by Sushant on 9/24/2016.
 */
class TwoDaysHikeScheduleJob {
    def hikeService
    static triggers = {
//        cronExpression: '0 0 18 * * THURS';
        cron name:'twodayhikeSchedule', cronExpression: '0 0 6 ? * FRI';
    }
    def execute(){
        println "Its in execution part2!!!!!!!!!!"
        hikeService.udpateTwoDayHikeDeadline();
    }
}
