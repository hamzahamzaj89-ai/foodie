import {
  Pizza,
  Beef,
  Sandwich,
  IceCreamCone,
  CupSoda,
  Soup,
} from "lucide-react-native";
import { LayoutGrid   } from "lucide-react-native";

export const categories = [ 
    {
        id: "0",
    name: "All",
    icon: LayoutGrid  ,

    },
  {
    id: "1",
    name: "Burger",
    icon: Sandwich,
  },
  {
    id: "2",
    name: "Pizza",
    icon: Pizza,
  },
  {
    id: "3",
    name: "BBQ",
    icon: Beef,
  },
  {
    id: "4",
    name: "Dessert",
    icon: IceCreamCone,
  },
  {
    id: "5",
    name: "Drinks",
    icon: CupSoda,
  },
  {
    id: "6",
    name: "Soup",
    icon: Soup,
  },
];