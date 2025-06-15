import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ReviewsTable from "./reviews-table";

const ReviewPage = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-primary-600 text-white rounded-t-2xl -mb-4">
        <h1 className="text-xl font-bold text-white">Paket Travel</h1>
        <Button variant={"secondary"} className="text-white">
          <Plus />
          Tambah Paket
        </Button>
      </div>
      <ReviewsTable />
    </>
  );
};

export default ReviewPage;
