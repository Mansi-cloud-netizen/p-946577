import React from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AudioSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Audio Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="speed">Speed</Label>
          <Slider
            id="speed"
            defaultValue={[1]}
            max={2}
            min={0.5}
            step={0.1}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pitch">Pitch</Label>
          <Slider
            id="pitch"
            defaultValue={[1]}
            max={2}
            min={0.5}
            step={0.1}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="volume">Volume</Label>
          <Slider
            id="volume"
            defaultValue={[100]}
            max={100}
            min={0}
            step={1}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
};