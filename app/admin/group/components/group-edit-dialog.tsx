"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import type { Group } from "@/types/travel-group";
import DialogWrapper from "@/components/dialog-wrapper";
import GroupEditForm from "./group-update-form";

const GroupEditDialog = ({ group }: { group: Group }) => {
  return (
    <DialogWrapper
      title={`Edit: ${group.name}`}
      trigger={
        <Button variant="outline" size="icon">
          <Pencil size={16} />
        </Button>
      }
    >
      {({ onClose }) => <GroupEditForm group={group} onClose={onClose} />}
    </DialogWrapper>
  );
};

export default GroupEditDialog;