/**
 * Created by Sushant on 8/28/2016.
 */
class HikeScheduleJob {
    def hikeService
    static triggers = {
//        cronExpression: '0 0 18 * * THURS';
        cron name:'hikeSchedule', cronExpression: '0 0 6 ? * SAT';
    }
    def execute(){
        println "Its in execution part123!!!!!!!!!!"
        hikeService.udpateHikeDeadline();
    }
}
