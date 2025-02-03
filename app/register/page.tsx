import { RegisterForm } from "../../components/register-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center">
      <div className="w-full max-w-sm md:max-w-3xl">
        <RegisterForm />
      </div>
    </div>
  )
}