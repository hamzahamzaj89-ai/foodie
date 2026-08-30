import { CircleCheckBig, Clock3, CookingPot, MapPin, PackageCheck } from "lucide-react-native";

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "picked_up"
  | "delivered";

type StatusStep = {
  id: OrderStatus;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
};

export const STATUS_STEPS: StatusStep[] = [
  {
    id: "pending",
    title: "Pending",
    description: "Order received",
    icon: Clock3,
  },
  {
    id: "confirmed",
    title: "Confirmed",
    description: "Restaurant accepted your order",
    icon: CircleCheckBig,
  },
  {
    id: "preparing",
    title: "Preparing",
    description: "Your food is being prepared",
    icon: CookingPot,
  },
  {
    id: "picked_up",
    title: "Out for Delivery",
    description: "Rider is on the way",
    icon: MapPin,
  },
  {
    id: "delivered",
    title: "Delivered",
    description: "Enjoy your meal",
    icon: PackageCheck,
  },
];

export const STATUS_INDEX: Record<OrderStatus, number> = {
  pending: 0,
  confirmed: 1,
  preparing: 2,
  picked_up: 3,
  delivered: 4,
};



export const getOrderStatus = (status: OrderStatus) => {



    
  // Later this will come from your order/Supabase data.
  const currentStatus: OrderStatus = status as OrderStatus;

  const currentIndex = STATUS_INDEX[currentStatus];

  const currentStep = STATUS_STEPS[currentIndex];
   

  const totalSteps = STATUS_STEPS.length

  return {
      currentIndex , currentStep , totalSteps
  }


}