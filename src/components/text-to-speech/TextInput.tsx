import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const TextInput = () => {
  return (
    <div className="space-y-2">
      <Label htmlFor="text-input">Enter Text</Label>
      <Textarea
        id="text-input"
        placeholder="Type your text here..."
        className="min-h-[150px] resize-none"
      />
    </div>
  );
};