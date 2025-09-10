"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { createReview } from "@/libs/reviews";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewSchema } from "@/libs/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const StarRating = ({
	value,
	onChange,
}: {
	value: number;
	onChange: (v: number) => void;
}) => (
	<div style={{ display: "flex", gap: 4 }}>
		{[1, 2, 3, 4, 5].map((star) => (
			<span
				key={star}
				style={{
					cursor: "pointer",
					fontSize: 28,
					color: star <= value ? "#FFA500" : "#ccc",
				}}
				onClick={() => onChange(star)}
				data-testid={`star-${star}`}
			>
				★
			</span>
		))}
	</div>
);

type ReviewFormFields = {
	rating: number;
	comment: string;
};

const ReviewForm = () => {
	const [success, setSuccess] = useState(false);
	const form = useForm<ReviewFormFields>({
		resolver: zodResolver(reviewSchema.omit({ user_id: true })),
		defaultValues: {
			rating: 0,
			comment: "",
		},
	});
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: async (formData: FormData) => createReview(formData),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["reviews"] });
			setSuccess(true);
			form.reset();
			form.setValue("rating", 0);
		},
	});

	// Gunakan form.watch untuk rating
	const rating = form.watch("rating");

	const onSubmit = (data: ReviewFormFields) => {
		if (!data.rating) return;
		const formData = new FormData();
		formData.append("rating", data.rating.toString());
		formData.append("comment", data.comment);
		mutation.mutate(formData);
	};

	const loading = mutation.status === "pending";

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="max-w-2xl w-full mx-auto border rounded-xl p-12 flex flex-col gap-8 shadow bg-white min-h-[480px]"
				style={{ boxSizing: "border-box" }}
			>
				{/* Hanya field comment dan rating */}
				<FormField
					control={form.control}
					name="comment"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Ceritakan pengalamanmu disini</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Ceritakan pengalamanmu disini"
									{...field}
									className="min-h-28 md:min-h-32 text-base"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<FormLabel>Berikan Rating</FormLabel>
					<StarRating
						value={rating}
						onChange={(v) => form.setValue("rating", v)}
					/>
					{!rating && (
						<span className="text-red-500 text-xs">Rating wajib diisi</span>
					)}
				</div>
				<Button
					type="submit"
					disabled={loading}
					className="mt-2 w-full h-12 text-base bg-orange-400 hover:bg-orange-500"
				>
					{loading ? "Mengirim..." : "Kirim"}
				</Button>
				{success && (
					<div className="text-green-600 text-center">
						Review berhasil dikirim!
					</div>
				)}
			</form>
		</Form>
	);
};

export default ReviewForm;
