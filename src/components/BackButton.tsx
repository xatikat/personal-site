"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant="default"
      className="fixed left-0 top-0 z-50 m-10 size-10 bg-dark-accent transition-all duration-100 active:scale-90"
      onClick={() => {
        router.back();
      }}
    >
      <MoveLeft size={20} />
    </Button>
  );
}
