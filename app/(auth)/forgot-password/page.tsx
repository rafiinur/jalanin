import ForgotPasswordForm from "@/components/forgot-password-form";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full mr-auto">
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2">
          <ChevronLeft />
          <Link href={"/login"}>Back to Login</Link>
        </div>
        <h1 className="text-5xl font-semibold text-primary">Forgot Password</h1>
        <p className=" text-neutral-500 mb-4">
          Enter your email below to recover your password
        </p>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
