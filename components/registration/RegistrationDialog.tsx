"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRegistrationForm } from "@/lib/hooks/useRegistrationForm";
import { RegistrationForm } from "./RegistrationForm";

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegistrationDialog({ open, onOpenChange }: RegistrationDialogProps) {
  const {
    formData,
    setFormData,
    captcha,
    setCaptcha,
    errors,
    isSubmitting,
    isSuccess,
    handleSubmit,
  } = useRegistrationForm();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit();
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Thank You!</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 py-4">
            <p className="text-lg text-gray-300">
              Please be patient. One of our agents will contact you soon to provide premium service details.
            </p>
            <Button onClick={() => onOpenChange(false)} className="bg-yellow-400 text-black hover:bg-yellow-500">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Join MagnatesEmpire</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-100px)] pr-4">
          <RegistrationForm
            formData={formData}
            setFormData={setFormData}
            captcha={captcha}
            setCaptcha={setCaptcha}
            errors={errors}
            isSubmitting={isSubmitting}
            onSubmit={onSubmit}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}