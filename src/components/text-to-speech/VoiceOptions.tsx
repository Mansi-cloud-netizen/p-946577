import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const VoiceOptions = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="voice-select">Voice Options</Label>
        <Select>
          <SelectTrigger id="voice-select">
            <SelectValue placeholder="Select voice" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male Voice</SelectItem>
            <SelectItem value="female">Female Voice</SelectItem>
            <SelectItem value="neutral">Neutral Voice</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="language-select">Language</Label>
        <Select>
          <SelectTrigger id="language-select">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="de">German</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};