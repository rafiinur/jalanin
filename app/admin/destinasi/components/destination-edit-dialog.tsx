// features/destination/components/destination-edit.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import type { Destination } from "@/types/destination";
import DialogWrapper from "@/components/dialog-wrapper";
import DestinationEditForm from "./destination-update-form";

const DestinationEditDialog = ({
  destination,
}: {
  destination: Destination;
}) => {
  return (
    <DialogWrapper
      title={`Edit: ${destination.name}`}
      trigger={
        <Button variant="outline" size="icon">
          <Pencil size={16} />
        </Button>
      }
    >
      {({ onClose }) => (
        <DestinationEditForm destination={destination} onClose={onClose} />
      )}
    </DialogWrapper>
  );
};

export default DestinationEditDialog;
