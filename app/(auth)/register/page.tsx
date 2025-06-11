import { RegisterForm } from "@/components/register-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col max-w-xl">
      <h1 className="text-4xl font-bold text-neutral-1000 mb-6">Sign Up</h1>
      <RegisterForm />
    </div>
  );
}
