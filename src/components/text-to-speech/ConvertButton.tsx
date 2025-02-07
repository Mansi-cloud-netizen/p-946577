import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const ConvertButton = () => {
  return (
    <Button size="lg" className="w-full md:w-auto">
      <Play className="w-4 h-4 mr-2" />
      Convert to Speech
    </Button>
  );
};