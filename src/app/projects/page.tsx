import Image from "next/image";
import type { Metadata } from "next";
import { Button, PageHero } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { galleryImages, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Projects | Suryajyot Solar",
  description:
    "A look at completed residential and commercial solar installations by Suryajyot Solar across Kolhapur District.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Installations across Kolhapur District"
        description="A look at completed residential and commercial solar systems delivered by our team."
        image="https://images.unsplash.com/photo-1524397057410-1e775ed476f3?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <Reveal key={img.src + i} delay={(i % 3) * 70}>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={640}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                    {img.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-navy-900/8 bg-white p-6 text-center text-sm leading-relaxed text-navy-500">
            More project photos — including before/after shots and system size
            details — are added as new installations are completed across{" "}
            {site.serviceArea}.
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary">
              Start Your Solar Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
