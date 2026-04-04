public class CarsAssemble {
    private static final int cars_produced_per_hour = 221;
    private static final double success_1 = 1.0;
    private static final double success_2 =.90;
    private static final double success_3 =.80;
    private static final double success_4 =.77;
    

    public double productionRatePerHour(int speed) {
        // throw new UnsupportedOperationException("Please implement the CarsAssemble.productionRatePerHour() method");
        if (speed > 0 && speed <= 4 ) {
        return speed * cars_produced_per_hour * success_1;
            } else if (speed >= 5 && speed <= 8) {
            return speed * cars_produced_per_hour * success_2;
            } else if (speed == 9 ) {
            return speed * cars_produced_per_hour * success_3;
            } else if ( speed == 10) {
            return speed * cars_produced_per_hour * success_4;
            } else {
            return 0;
            }
    }

    public int workingItemsPerMinute(int speed) {
        // throw new UnsupportedOperationException("Please implement the CarsAssemble.workingItemsPerMinute() method");

if (speed > 0 && speed <= 4 ) {
        return (int)(speed * cars_produced_per_hour * success_1) / 60;
            
            } else if (speed >= 5 && speed <= 8) {
            return (int)(speed * cars_produced_per_hour * success_2) / 60;
            
            } else if (speed == 9 ) {
            return (int)(speed * cars_produced_per_hour * success_3) / 60;
            
            } else if ( speed == 10) {
            return (int)(speed * cars_produced_per_hour * success_4) / 60;
            
            } else {
            return 0;
            }  
    }
}
