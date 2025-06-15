// features/destination/components/destination-create.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import DialogWrapper from "@/components/dialog-wrapper";
import DestinationCreateForm from "./destination-create-form";

const DestinationCreateDialog = () => {
  return (
    <DialogWrapper
      title="Tambah Destinasi"
      trigger={
        <Button variant="secondary" className="text-white">
          <Plus size={16} className="mr-2" />
          Tambah Destinasi
        </Button>
      }
    >
      {({ onClose }) => <DestinationCreateForm onClose={onClose} />}
    </DialogWrapper>
  );
};

export default DestinationCreateDialog;
