import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Trophy, ArrowRight, Sparkles } from "lucide-react";

const QuizSection = () => {
  return (
    <section className="container mx-auto my-16 ">
      <div className="max-w-7xl mx-auto">
        <Card
          className="relative overflow-hidden border-0 shadow-2xl rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary-400) 0%, var(--color-primary-500) 50%, var(--color-primary-600) 100%)",
          }}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-10">
            <div className="bg-primary-200 absolute top-0 right-0 w-96 h-96 rounded-full"></div>
            <div className="bg-primary-700 absolute bottom-0 left-0 w-80 h-80 rounded-full"></div>
            <div className="bg-primary-300 absolute top-1/2 left-1/2 w-64 h-64 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Floating icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Brain className="absolute top-16 left-16 w-8 h-8 text-white/20 animate-pulse" />
            <Trophy className="absolute top-32 right-20 w-6 h-6 text-white/15 animate-bounce" />
            <Sparkles className="absolute bottom-20 left-32 w-7 h-7 text-white/25 animate-pulse" />
          </div>

          <CardContent className="relative p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col items-center text-center space-y-8 sm:space-y-12">
              {/* Header */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Quiz Travel
                </h2>

                <p
                  className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
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
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
                <Button
                  size="lg"
                  className="group bg-white hover:bg-white/90 text-black font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-0"
                  style={{ color: "var(--color-primary-700)" }}
                >
                  <Brain className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Mulai Quiz
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;
