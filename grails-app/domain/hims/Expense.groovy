package hims

class Expense {

    double breakfast
    double snacks
    double dinner
    double transportation
    double providedBudget
    Hike hike;

    static fetchMode = [hike:"eager"]

    static constraints = {
    }
}
