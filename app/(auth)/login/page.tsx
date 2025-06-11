// app/(auth)/login/page.tsx
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col max-w-lg">
      {/* Title */}
      <h1 className="text-4xl font-bold text-neutral-1000 mb-6">Login</h1>

      {/* Login Form */}
      <LoginForm />
    </div>
  );
}
