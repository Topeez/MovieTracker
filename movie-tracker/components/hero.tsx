import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-12 px-6 py-12 lg:grid-cols-2 lg:py-0">
        <div className="my-auto">
          <Badge
            asChild
            className="py-1 border-border rounded-full"
            variant="secondary"
          >
            <Link href="#">
              Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[17ch] font-semibold lg:text-[2.75rem] xl:text-[3.25rem] text-4xl md:text-5xl leading-[1.2]! tracking-[-0.035em]">
            Movie Tracker: Your Ultimate Movie Companion
          </h1>
          <p className="mt-6 max-w-[60ch] text-foreground/80 text-lg">
            Discover, track, and share your movie experiences with Movie Tracker.
          </p>
          
        </div>
        <div className="bg-accent rounded-xl lg:rounded-none w-full lg:w-250 lg:h-screen aspect-video lg:aspect-auto" />
      </div>
    </div>
  );
}
