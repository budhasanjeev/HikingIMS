package hims
import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

@Secured('ROLE_ADMIN')
class ExpenseController {

    def commonService

    @Secured('permitAll')
    def index() {

        def expenseList = Expense.findAll()
        render(view: '_show',model: [expense:expenseList]);

    }

    def save(){

        def hikers = Hiker.findAllByIsInHiker(true);
        hikers.each{
            it?.isInHiker = false
            it.save()
        }

        def hike = Hike.findById(params.hike_id as long)
        hike.isOver = true
        hike.save(flush: true, failOnError: true)
        def expense = new Expense(params);
        expense.hike=hike

        if (expense.save(flush: true, failOnError: true)){
            return render ([messageType:"Success"] as JSON)
        }
        else {
            return render ([messageType:"Error"] as JSON)
        }
    }

    def delete(){

        def expense = Expense.findById(params.id as long)

        expense?.delete(flush: true)

        if(Expense.findById(params.id as long)){
            return render ([messageType:"Error"] as JSON)
        }else{
            return render ([messageType:"Success"] as JSON)
        }

    }

    def edit(){

        def expense = Expense.findById(params.id as long)

        return render(expense as JSON)
    }

    def update(){

        def expense = Expense.findById(params.id as long)

        expense.properties = params

        if (expense.save(flush: true)){
            return render([messageType:"Success"] as JSON)
        }
        else {
            return render([messageType:"Error"] as JSON)
        }

    }

    def generateBill(){

        if(commonService.generateBill(params)){

            return render([messageType:"success"] as JSON)
        }
        else {
            return render([messageType:"error"] as JSON)
        }

    }
    def downloadExpense(){
        println "id - " + params.id
        def expense = Expense.get(params.id as long);
        response.setContentType("application/pdf")
        response.setHeader("Content-Disposition", "attachment; filename=Expense.pdf")
        renderPdf(template: '/layouts/expenseReport', model: [expense: expense])
    }
}
