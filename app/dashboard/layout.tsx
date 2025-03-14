import type { ReactNode } from "react"
import ProtectedRoute from "@/components/protected-route"
import ClientHeader from "@/components/client-header"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen">
        <ClientHeader />
        <main>{children}</main>
      </div>
    </ProtectedRoute>
  )
}

