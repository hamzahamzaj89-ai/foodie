import { create } from "zustand";
import { Session } from "@supabase/supabase-js";
import { IAppState } from "../../../interface/IAppStore";




interface AppStore {
  session: Session | null;
  appState: IAppState | null;
  loading : boolean;
  error : any;


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