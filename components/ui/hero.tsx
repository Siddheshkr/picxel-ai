import React from "react";
import HeroVideoDialog from "../magicui/hero-video-dialog";
import { AuroraText } from "../magicui/aurora-text";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { BorderBeam } from "../magicui/border-beam";
import { ChevronRight } from "lucide-react";

function HerosSection() {
  return (
    <div>
      <section className="container mx-auto pt-10 ">
        {/* Main Content */}
        <div className="relative mb-5">
          {/* Announcement Banner */}
          <div className="group w-60 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-sm font-medium">
              Introducing Picxel-AI
            </AnimatedGradientText>
            <ChevronRight
              className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-2xl sm:text-5xl md:text-6xl  font-bold tracking-tight text-white">
            Unleash Your {""}
            <AuroraText>Creativity</AuroraText> {""}
            with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              AI Editing {""}
            </span>
            Tools Built for You.
          </h1>
          <p className=" text-xs md:text-lg text-white max-w-2xl mx-auto leading-normal">
            Picxel makes photo editing effortless — one click is all it takes{" "}
            <br />
            crop, resize, adjust colors, remove backgrounds, and enhance your
            image
          </p>
        </div>
        <div className="relative mt-20 px-3 w-full h-fit md:px-10 flex justify-center items-center">
          {/* Beam Border Wrapper */}
          <div className="relative rounded-xl overflow-hidden z-10">
            <HeroVideoDialog
              className="hidden dark:block rounded-xl border-t-8 border-zinc-500/30"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Dummy Video Thumbnail"
            />

            {/* Beam Borders (Animated) */}
            <BorderBeam
              duration={6}
              size={400}
              className="pointer-events-none absolute inset-0 z-20 from-transparent via-purple-700 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              borderWidth={2}
              className="pointer-events-none absolute inset-0 z-20 from-transparent via-pink-700 to-transparent"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HerosSection;
