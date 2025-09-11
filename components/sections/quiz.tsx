import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Trophy, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const QuizSection = () => {
	return (
		<section className="container px-4 py-16 mx-auto">
			<div className="mx-auto max-w-7xl">
				<Card
					className="relative overflow-hidden border-0 shadow-2xl rounded-3xl"
					style={{
						background:
							"linear-gradient(135deg, var(--color-primary-400) 0%, var(--color-primary-500) 50%, var(--color-primary-600) 100%)",
					}}
				>
					{/* Background decorations */}
					<div className="absolute inset-0 opacity-10">
						<div className="absolute top-0 right-0 rounded-full bg-primary-200 w-96 h-96"></div>
						<div className="absolute bottom-0 left-0 rounded-full bg-primary-700 w-80 h-80"></div>
						<div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300 top-1/2 left-1/2"></div>
					</div>

					{/* Floating icons */}
					<div className="absolute inset-0 overflow-hidden pointer-events-none">
						<Brain className="absolute w-8 h-8 top-16 left-16 text-white/20 animate-pulse" />
						<Trophy className="absolute w-6 h-6 top-32 right-20 text-white/15 animate-bounce" />
						<Sparkles className="absolute bottom-20 left-32 w-7 h-7 text-white/25 animate-pulse" />
					</div>

					<CardContent className="relative p-8 sm:p-12 lg:p-16">
						<div className="flex flex-col items-center space-y-8 text-center sm:space-y-12">
							{/* Header */}
							<div className="space-y-4 sm:space-y-6">
								<h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
									Quiz Travel
								</h2>

								<p
									className="max-w-2xl mx-auto text-base leading-relaxed sm:text-lg lg:text-xl"
									style={{ color: "var(--color-primary-100)" }}
								>
									Jawab quiz singkat kami dan temukan tempat wisata yang pas
									banget buat kamu!
									<span className="font-semibold text-white">
										{" "}
										Mulai sekarang
									</span>
								</p>
							</div>

							{/* Action Buttons */}
							<div className="flex flex-col w-full max-w-md gap-4 sm:flex-row sm:gap-6">
								<Link href="/quiz">
									<Button
										size="lg"
										className="px-8 py-4 font-semibold text-black transition-all duration-300 transform bg-white border-0 shadow-lg group hover:bg-white/90 rounded-xl hover:shadow-xl hover:-translate-y-1"
										style={{ color: "var(--color-primary-700)" }}
									>
										<Brain className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
										Mulai Quiz
										<ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
									</Button>
								</Link>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default QuizSection;
