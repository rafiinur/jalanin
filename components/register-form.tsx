"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z
  .object({
    firstName: z.string().min(1, "Nama depan harus diisi"),
    lastName: z.string().min(1, "Nama belakang harus diisi"),
    email: z.string().email("Email tidak valid").min(1, "Email harus diisi"),
    phoneNumber: z
      .string()
      .min(10, "Nomor telepon minimal 10 digit")
      .regex(/^[0-9+\-\s()]+$/, "Nomor telepon tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string().min(1, "Konfirmasi password harus diisi"),
    agreement: z
      .boolean()
      .refine(
        (val) => val === true,
        "Anda harus menyetujui syarat dan ketentuan"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak cocok",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
  });

  const handleSubmitRegister = async (data: z.infer<typeof formSchema>) => {
    setError(null);
    try {
      // await register({
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      //   email: data.email,
      //   phoneNumber: data.phoneNumber,
      //   password: data.password,
      // });
      console.log("Registration data:", data);

      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Registrasi gagal. Coba lagi."
      );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitRegister)}>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-full h-12 border-primary ps-6"
                      placeholder="Masukkan nama depan"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-full h-12 border-primary ps-6"
                      placeholder="Masukkan nama belakang"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email and Phone Number */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-full h-12 border-primary ps-6"
                      type="email"
                      placeholder="Masukkan email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-full h-12 border-primary ps-6"
                      type="tel"
                      placeholder="Masukkan nomor telepon"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Password and Confirm Password */}
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-full h-12 border-primary ps-6"
                      type="password"
                      placeholder="Masukkan password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Password and Confirm Password */}
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-full h-12 border-primary ps-6"
                      type="password"
                      placeholder="Konfirmasi password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Agreement Checkbox */}
          <FormField
            control={form.control}
            name="agreement"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm">
                    Saya menyetujui{" "}
                    <a
                      href="/terms-of-service"
                      className="text-primary hover:underline"
                    >
                      Syarat dan Ketentuan
                    </a>{" "}
                    serta{" "}
                    <a
                      href="/privacy-policy"
                      className="text-primary hover:underline"
                    >
                      Kebijakan Privasi
                    </a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-4">
            <Button
              size="lg"
              type="submit"
              className="w-full h-12 rounded-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Loading..." : "Daftar"}
            </Button>
            <p className="text-center text-sm text-neutral-500">
              Sudah punya akun? silahkan{" "}
              <Link href={"/login"} className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
}
