// features/destination/components/dialog-wrapper.tsx
"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ReactNode, useState } from "react";

// Tambahkan `title` props:
type DialogWrapperProps = {
  title?: string;
  trigger: ReactNode;
  children: (props: { onClose: () => void }) => ReactNode;
};

const DialogWrapper = ({ title, trigger, children }: DialogWrapperProps) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        {children({ onClose })}
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
