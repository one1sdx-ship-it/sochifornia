import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/content";
import { GradientImage } from "@/components/gradient-image";
import { LeadSection } from "@/components/sections/lead-section";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Статья не найдена" };
  return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, type: "article" } };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <section className="relative">
          <GradientImage id={post.cover} className="absolute inset-0 h-full w-full" label={post.title} />
          <div className="container-content relative flex min-h-[44vh] flex-col justify-end py-12 text-white">
            <nav className="mb-auto pt-4 text-sm text-white/80">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link href="/" className="hover:text-white">Главная</Link></li>
                <ChevronRight className="h-4 w-4" />
                <li><Link href="/blog" className="hover:text-white">Блог</Link></li>
              </ol>
            </nav>
            <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
              <span>{post.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readingTime}</span>
            </div>
          </div>
        </section>

        <div className="container-content py-section-sm">
          <div className="prose-content mx-auto max-w-2xl space-y-5 text-body">
            <p className="text-lg text-ink">{post.excerpt}</p>
            <p>
              Это демонстрационная статья-заглушка. Полные материалы блога появятся здесь после
              наполнения через админ-панель. Структура страницы полностью готова к публикации
              реального контента: заголовки, абзацы, изображения и врезки.
            </p>
            <h2 className="font-display text-2xl font-bold text-ink">Подзаголовок раздела</h2>
            <p>
              Здесь будет основной текст статьи с полезными советами, рекомендациями и личными
              наблюдениями наших гидов. Мы расскажем о лучших местах, оптимальных маршрутах и
              маленьких хитростях, которые сделают ваш отдых в Сочи незабываемым.
            </p>
            <p>
              А пока вы можете перейти в каталог и выбрать экскурсию, которая подходит именно вам.
            </p>
          </div>
        </div>
      </article>

      <LeadSection />
    </>
  );
}
