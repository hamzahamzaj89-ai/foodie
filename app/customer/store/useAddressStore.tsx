import { IAddress } from "@/interface/IAddress";
import { create } from "zustand";




interface AddressState {
  selectedAddress: IAddress | null;



  setSelectedAddress: (selectedAddress: IAddress) => void;


}

export const useAddressStore = create<AddressState>((set) => ({
  selectedAddress: null,

  setSelectedAddress: (selectedAddress) =>
    set({
      selectedAddress,
    })
}));