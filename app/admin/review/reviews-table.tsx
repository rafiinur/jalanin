import React from "react";
import { reviewColumns } from "./columns";
import { DataTable } from "@/components/data-table";
import type { Review } from "@/types/review";

const reviews: Review[] = [];

const ReviewsTable = () => {
  return (
    <DataTable columns={reviewColumns} data={reviews} filterKey="comment" />
  );
};

export default ReviewsTable;
