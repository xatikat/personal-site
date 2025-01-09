"use client";
import ToggleButton from "@/components/ui/ToggleButton";
import { useState } from "react";

export default function GridToggle() {
  const [isGrid, setIsGrid] = useState(true);

  return <ToggleButton isState={isGrid} setIsState={setIsGrid} />;
}
