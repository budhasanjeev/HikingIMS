package hims


class Hike {

    String title
    Date hikingDate
    String hikingType
    String startTime
    String finishTime
    boolean deadLine = false

    @Override
    public String toString()
    {
        return title;
    }

    static constraints = {
    }
}
