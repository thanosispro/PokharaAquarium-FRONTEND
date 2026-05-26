import { cn } from "@/lib/utils";
import { FadeIn } from "../AnimationWrappers";

export function Section({ children, className, fullHeight = false, id }) {
  return (
    <section 
      id={id}
      className={cn(
        "relative w-full py-16 md:py-24 lg:py-32 overflow-hidden",
        fullHeight ? "min-h-screen flex items-center justify-center" : "",
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, align = "center", className }) {
  return (
    <div className={cn(
      "mb-12 md:mb-16 max-w-3xl",
      align === "center" ? "mx-auto text-center" : align === "right" ? "ml-auto text-right" : "text-left",
      className
    )}>
      <FadeIn>
        {subtitle && (
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          {title}
        </h2>
      </FadeIn>
    </div>
  );
}
