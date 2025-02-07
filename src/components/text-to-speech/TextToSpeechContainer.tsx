import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TextInput } from "./TextInput";
import { VoiceOptions } from "./VoiceOptions";
import { AudioSettings } from "./AudioSettings";
import { ConvertButton } from "./ConvertButton";

export const TextToSpeechContainer = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          TEXT TO SPEECH
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <TextInput />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <VoiceOptions />
            <AudioSettings />
          </div>
          <div className="flex items-end justify-center md:justify-end">
            <ConvertButton />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};