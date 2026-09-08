import { create } from "zustand";
import { Session } from "@supabase/supabase-js";
import { IAppState } from "../../../interface/IAppStore";
import { ISection } from "@/interface/ISectionPage";







interface AppStore {
  session: Session | null;
  appState: IAppState | null;
  loading : boolean;
  error : any;
  defaultSection: ISection;


  isInitialized : boolean;
  setSession: (session: Session) => void;
  setAppState: (state: IAppState) => void;
  setIsinitialized: (isInitialized: boolean) => void;
  clearSession: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void
}

export const useAppStore = create<AppStore>((set) => ({

  
  session: null,
  appState: null,
  isInitialized: false,
  loading: false,
  error: null,
  defaultSection: {
    id:  "7f3c2a91-6d84-4b17-9e52-a8c731f04d6b",
    imageUrl: null,
    title: "Top Rated",
    description: "Gets all the top rated menus for the restaurants "
  },




  setError: (error) => {
        set({
          error
        })
  },



  setLoading: (loading) => {
   set({
    loading
   })
  },

  setSession: (session) =>
    set({
      session,
    }),

    setIsinitialized : (isInitialized) => {
         set({
          isInitialized
         })
    },


  setAppState: (appState) =>
    set({
      appState,
    }),

  clearSession: () =>
    set({
      session: null,
    }),
}));