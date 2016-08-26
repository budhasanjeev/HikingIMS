package hims


class Route {

    String startPoint
    String finishPoint
    String difficultyLevel
    String estimatedTime

    static constraints = {

    }
    @Override
    public String toString()
    {
        return startPoint + " - " + finishPoint;
    }
}
