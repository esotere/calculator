public class Lasagna {
    private static final int EXPECTED_MINUTES_IN_OVEN = 40;
    private static final int PREPARATION_TIME_PER_LAYER = 2;
    public int expectedMinutesInOven() {
        return 40;
    }

    public int remainingMinutesInOven(int y) {
        return expectedMinutesInOven() - y;
    }
 
    public int preparationTimeInMinutes(int z) {
        return 2 * z;
    }

    public int totalTimeInMinutes(int s, int t) {
        return preparationTimeInMinutes(s) + t;
    }
}
