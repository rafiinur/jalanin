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
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { register } from "@/actions";
import Link from "next/link";
import { userSchema } from "@/libs/schema";

export function RegisterForm() {
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const form = useForm<z.infer<typeof userSchema>>({
		resolver: zodResolver(userSchema),
		defaultValues: {
			full_name: "",
			email: "",
			password: "",
		},
	});

	const handleSubmitRegister = async (data: z.infer<typeof userSchema>) => {
		setError(null);
		try {
			const res = await register(data.email, data.password, data.full_name);
			if (!res.success) throw new Error(res.message || "Registrasi gagal.");
			router.push("/login");
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
					<FormField
						control={form.control}
						name="full_name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className="h-12 rounded-full border-primary ps-6"
										placeholder="Masukkan nama lengkap"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className="h-12 rounded-full border-primary ps-6"
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
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className="h-12 rounded-full border-primary ps-6"
										type="password"
										placeholder="Masukkan password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
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
						<p className="text-sm text-center text-neutral-500">
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
