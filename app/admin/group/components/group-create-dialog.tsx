"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import DialogWrapper from "@/components/dialog-wrapper";
import GroupCreateForm from "./group-create-form";

const GroupCreateDialog = () => {
  return (
    <DialogWrapper
      title="Tambah Group"
      trigger={
        <Button variant="secondary" className="text-white">
          <Plus size={16} className="mr-2" />
          Tambah Group
        </Button>
      }
    >
      {({ onClose }) => <GroupCreateForm onClose={onClose} />}
    </DialogWrapper>
  );
};

export default GroupCreateDialog;