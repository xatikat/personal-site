"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AlbumRow from "@/components/ui/AlbumRow";
import { motion } from "motion/react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    const captures = document.querySelectorAll(".glow-capture");

    if (captures) {
      captures.forEach((capture) => {
        const clonedChild = capture.children[0].cloneNode(true);
        const overlay: HTMLElement | null =
          document.querySelector(".glow-overlay");

        if (overlay) {
          overlay.appendChild(clonedChild);
        }
      });
    }
  }, []);

  function onTestGlowOver(event: React.MouseEvent<HTMLElement>) {
    const overlay: HTMLElement | null = document.querySelector(".glow-overlay");

    if (overlay) {
      const x = event.pageX - overlay.parentElement.offsetLeft;
      const y = event.pageY - overlay.parentElement.offsetTop;

      overlay.style.setProperty("--x", `${x}px`);
      overlay.style.setProperty("--y", `${y}px`);
      overlay.style.setProperty("--glow-opacity", `1`);

      //console.log(overlay.style.getPropertyValue("--x"));
      //console.log(overlay.style.getPropertyValue("--y"));
      //console.log(overlay.style.getPropertyValue("--glow-opacity"));
    }
  }

  function onTestGlowOut(event: React.MouseEvent<HTMLElement>) {
    const overlay: HTMLElement | null = document.querySelector(".glow-overlay");
    if (overlay) {
      overlay.style.setProperty("--glow-opacity", `0`);
    }
  }

  return (
    <div>
      <div className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl leading-tight">header text</h1>

        <main>
          <div className="flex w-[40vw] flex-col gap-10">
            <Link
              className={"group-albumrow glow-capture relative"}
              href={"/album/" + 10}
              draggable={false}
              onMouseMove={onTestGlowOver}
              onMouseOut={onTestGlowOut}
            >
              <div className="flex flex-row items-center gap-10 rounded-3xl border-10 border-accent-1 bg-background p-10 glow:border-glow/[.25]">
                <Image
                  className={"glow scale-100 rounded-xl glow:bg-glow/[.15]"}
                  src={"/ph.jpg"}
                  alt={"test"}
                  height={100}
                  width={100}
                  unoptimized={false}
                  draggable={false}
                />
                <div className={"flex flex-col"}>
                  <h1 className="text-4xl font-bold glow:text-glow/[.75]">
                    test
                  </h1>
                  <p className={"text-2xl"}>test</p>
                </div>
              </div>
              <div className={"glow-overlay"}></div>
            </Link>
          </div>
        </main>

        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
          <h1>footer text</h1>
        </footer>
      </div>
    </div>
  );
}
