import LoginForm from "@/components/login-form"
import LanguageSwitcher from "@/components/language-switcher"
import { ClientLoginContent } from "@/components/client-login-content"
import AuthDebugger from "@/components/auth-debugger"

export default function Home() {
  return (
    <div className="city-login-bg flex min-h-screen items-center justify-center">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      <div className="city-login-content w-full max-w-md p-8 space-y-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl">
        <ClientLoginContent />
        <LoginForm />
      </div>

      {/* Add this for debugging - remove in production */}
      {process.env.NODE_ENV !== "production" && <AuthDebugger />}
    </div>
  )
}

