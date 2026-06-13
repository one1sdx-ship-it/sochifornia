import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/content";
import { PageHeader } from "@/components/page-header";
import { GradientImage } from "@/components/gradient-image";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Блог о Сочи",
  description: "Гид по Сочи: маршруты, лучшие смотровые, советы для путешественников и идеи для отдыха с детьми от команды Sochifornia Travel.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Блог"
        title="Полезное о Сочи"
        subtitle="Маршруты, советы и вдохновение для вашего идеального отдыха на юге."
      />

      <section className="container-wide py-section-sm sm:py-section">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 70}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <GradientImage id={post.cover} label={post.title} className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span>{post.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readingTime}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-body">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Читать <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
