// src/features/auth/login/api/useLoginService.tsx

import { UseFormReturn } from "react-hook-form";
import { LoginFormData } from "../types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useLoginService = (form: UseFormReturn<LoginFormData>) => {
  return useMutation({
    mutationFn: async (data: LoginFormData) => {
      const response = await axios.post('/post/auth/login', data);
      return response.data;
    },
    onSuccess: () => {
      console.log('Вы успешно вошли!');
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message || 'Ошибка при входе'
      console.log(err)

      if(message.toLowerCase().includes('email')){
        form.setError('email', {
          type: 'server',
          message
        })
      }
    }
  })
}

export default useLoginService