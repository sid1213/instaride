export interface ThingsToRemember {
  icon:
    | "SecurityDeposit"
    | "LocationTimings"
    | "DistanceLimit"
    | "ExcessCharge"
    | "LatePenalty"
    | "SpeedLimit";
  description: string;
  subtitle: string;
}
export interface BikesFeatures {
  icon:
    | "Displacement"
    | "TopSpeed"
    | "FuelCapacity"
    | "Seats"
    | "KerbWeight"
    | "Mileage";
  subtitle: string;
}

export interface WhyChooseUs {
  icon: "Quality" | "Reservations" | "Service" | "Rates";
  subtitle: string;
  description: string;
}
