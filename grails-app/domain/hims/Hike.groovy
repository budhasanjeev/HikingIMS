package hims


class Hike {

    String title
    String hikingDate
    String hikingType
    String startTime
    String finishTime

    @Override
    public String toString()
    {
        return title;
    }

    static constraints = {
    }
}
