import { useMutation } from "@tanstack/react-query";

import { signUp } from "@/app/services/auth.services";

export function useSignUp() {
  return useMutation({
    mutationFn: signUp,
  });
}


