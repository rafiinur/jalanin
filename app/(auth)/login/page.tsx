import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="w-full mr-auto">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-semibold text-neutral-1000 text-center">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
