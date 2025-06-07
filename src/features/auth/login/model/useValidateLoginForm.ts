// src/features/auth/signup/model/useValidateLoginForm.tsx

import { useForm } from "react-hook-form"
import { LoginFormData } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./loginSchema"

const useValidateLoginForm = (t: (key: string) => string) => {
  return useForm<LoginFormData>({
    resolver: zodResolver(schema(t)),
    defaultValues: {
      email: '',
      password: '',
      remember: false
    }
  })
}

export default useValidateLoginForm