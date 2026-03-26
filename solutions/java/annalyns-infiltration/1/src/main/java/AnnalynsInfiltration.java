class AnnalynsInfiltration {
    public static boolean canFastAttack(boolean knightIsAwake) {
        // throw new UnsupportedOperationException("Please implement the (static) AnnalynsInfiltration.canFastAttack() method");
        var check = knightIsAwake? false: true;
        return check;
    }

    public static boolean canSpy(boolean knightIsAwake, boolean archerIsAwake, boolean prisonerIsAwake) {
        // throw new UnsupportedOperationException("Please implement the (static) AnnalynsInfiltration.canSpy() method");
       var check = knightIsAwake || archerIsAwake || prisonerIsAwake? true: false;
           return check;
    }

    public static boolean canSignalPrisoner(boolean archerIsAwake, boolean prisonerIsAwake) {
        // throw new UnsupportedOperationException("Please implement the (static) AnnalynsInfiltration.canSignalPrisoner() method");
        var check = !archerIsAwake && prisonerIsAwake? true: false;
        return check;
    }

    public static boolean canFreePrisoner(boolean knightIsAwake, boolean archerIsAwake, boolean prisonerIsAwake, boolean petDogIsPresent) {
        // throw new UnsupportedOperationException("Please implement the (static) AnnalynsInfiltration.canFreePrisoner() method");
        if (petDogIsPresent && !archerIsAwake) {
            return true;
        } else if (!knightIsAwake && !archerIsAwake && prisonerIsAwake) {
            return true;
        } else {
            return false;
        }
    }
}
