public class Lasagna {
    // TODO: define the 'expectedMinutesInOven()' method
    public int expectedMinutesInOven() {
        return 40;
    }

    // TODO: define the 'remainingMinutesInOven()' method
    public int remainingMinutesInOven(int y) {
        return expectedMinutesInOven() - y;
    }
 
    // TODO: define the 'preparationTimeInMinutes()' method
    public int preparationTimeInMinutes(int z) {
        return 2 * z;
    }

    // TODO: define the 'totalTimeInMinutes()' method
    public int totalTimeInMinutes(int s, int t) {
        //t = expectedMinutesInOven() - remainingMinutesInOven();
        return preparationTimeInMinutes(s) + t;
    }
}
