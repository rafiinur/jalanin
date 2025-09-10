"use client";

import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import DialogWrapper from "@/components/dialog-wrapper";
import TravelPackageForm from "./travel-package-form";
import type { TravelPackage } from "@/types/travel-package";

const TravelPackageEditDialog = ({
  travelPackage,
}: {
  travelPackage: TravelPackage;
}) => {
  return (
    <DialogWrapper
      title={`Edit: ${travelPackage.name}`}
      trigger={
        <Button variant="outline" size="icon">
          <Pencil size={16} />
        </Button>
      }
    >
      {({ onClose }) => (
        <TravelPackageForm mode="edit" travelPackage={travelPackage} onClose={onClose} />
      )}
    </DialogWrapper>
  );
};

export default TravelPackageEditDialog;