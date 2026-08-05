import { useMutation } from "@tanstack/react-query";

import { signIn } from "@/app/services/auth.services";

export function useSignIn() {
  return useMutation({
    mutationFn: signIn,
  });
}