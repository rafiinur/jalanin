import OverallReviews from "@/components/overall-reviews";
import ReviewForm from "@/components/review-form";
import TestimonialCarousel from "@/components/testimonial-carousel";
import React from "react";

const ReviewPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center py-32">
        <h2 className="max-w-2xl mb-6 text-center section-title">
          Ceritakan Pengalamanmu bersama kami
        </h2>
        <p className="mb-4 text-lg text-center text-neutral-700">
          Bagikan kisah seru liburanmu dan jadi inspirasi bagi traveler lainnya.
        </p>
        <ReviewForm />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="max-w-2xl mb-6 text-center section-title">
          Apa Kata Mereka?
        </h2>
        <p className="mb-4 text-lg text-center text-neutral-700">
          Dengar langsung dari mereka yang sudah merasakan serunya liburan
          bersama kami.
        </p>
        <TestimonialCarousel />
      </div>
      <div>
        <h2 className="mb-6">Testimoni Jalanin</h2>
        <OverallReviews />
      </div>
    </div>
  );
};

export default ReviewPage;
