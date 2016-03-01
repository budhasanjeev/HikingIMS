package hims

class Expense {

    double breakfast
    double snacks
    double dinner
    double transportation
    double providedBudget = 8000.00
    Hike hike;

    static constraints = {
//        breakfast()
//        snacks()
//        dinner()
//        transportation()
//        providedBudget()
        hike(nullable: false)
    }
}
