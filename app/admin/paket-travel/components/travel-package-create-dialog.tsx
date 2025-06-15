// features/destination/components/destination-create.tsx
"use client";

import DialogWrapper from "@/components/dialog-wrapper";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TravelPackageCreateForm from "./travel-package-create-form";

const TravelPackageCreateDialog = () => {
  return (
    <DialogWrapper
      title="Tambah Paket"
      trigger={
        <Button variant="secondary" className="text-white">
          <Plus size={16} className="mr-2" />
          Tambah Paket
        </Button>
      }
    >
      {({ onClose }) => <TravelPackageCreateForm onClose={onClose} />}
    </DialogWrapper>
  );
};

export default TravelPackageCreateDialog;
