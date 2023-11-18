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

export interface User {
  name?: string | undefined | null;
  email?: string | undefined | null;
  image?: string | undefined | null;
}
