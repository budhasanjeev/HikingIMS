package hims

import grails.plugin.springsecurity.annotation.Secured

@Secured('permitAll')
class BatchController {


    @Secured('permitAll')
    def save(){

        def batch = new Batch()

        batch.batch = params.batch

        if (batch.save(flush: true,failOnError: true)){
            render("Successfully Created");
        }
    }

}
