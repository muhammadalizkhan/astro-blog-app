import React, { useEffect, useState } from "react";
import PayloadRichText from "./PayloadRichText";

type Tag = { id?: string; title: string };
type Category = { id?: string; title: string };
type Image = { url: string; alt?: string };
type Article = {
  id: string;
  title: string;
  subtitle?: string;
  image?: string | Image;
  category?: string | Category;
  datetime: string;
  tags?: (string | Tag)[];
  author: string;
  description: string;
  body: any;
};

export default function ArticleDetailPage({ id }: { id: string }) {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    console.log("Fetching article with ID:", id);

    fetch(`http://localhost:3000/api/articles/${id}?depth=2`)
      .then(res => {
        console.log("HTTP Status:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("API Response:", data);
        setArticle(data.doc);
      })
      .catch(error => {
        console.error("Error fetching article:", error);
      });
  }, [id]);

  if (!article) return <div className="text-center mt-24 text-lg">Loading...</div>;

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-2">
      <article className="max-w-2xl w-full mx-auto bg-zinc-900 rounded-xl shadow-lg p-6 my-10 flex flex-col items-center">
        {/* Render Article Image */}
        {article.image && (
          <img
            src={
              typeof article.image === "string"
                ? article.image
                : `http://localhost:3000${article.image.url}`
            }
            alt={article.title}
            className="w-full rounded-lg object-cover mb-8"
            style={{ maxHeight: "320px" }}
          />
        )}

        {/* Render Article Title */}
        <h1 className="text-3xl font-bold text-white mb-2 text-center">{article.title}</h1>

        {/* Render Article Subtitle */}
        {article.subtitle && (
          <h2 className="text-xl font-light text-white/70 mb-4 text-center">{article.subtitle}</h2>
        )}

        {/* Render Metadata (Category, Date) */}
        <div className="flex justify-center gap-4 text-sm text-zinc-500 mb-6">
          <span>
            {typeof article.category === "string"
              ? article.category
              : article.category?.title}
          </span>
          <span>·</span>
          <span>{new Date(article.datetime).toLocaleDateString()}</span>
        </div>

        {/* Render Tags */}
        <div className="mb-4 text-xs text-zinc-400 flex flex-wrap gap-2 justify-center">
          {Array.isArray(article.tags) &&
            article.tags.map((tag, idx) => (
              <span
                key={typeof tag === "string" ? tag : tag.id ?? tag.title ?? idx}
                className="px-2 py-0.5 border border-blue-500 text-blue-400 rounded-full"
              >
                #{typeof tag === "string" ? tag : tag.title}
              </span>
            ))}
        </div>

        {/* Render Author */}
        <div className="mb-8 text-center text-zinc-500 text-xs">by {article.author}</div>

        {/* Render Article Description */}
        <p className="text-center text-zinc-400 text-sm mb-8">{article.description}</p>

        {/* Render Article Body */}
        <section className="prose prose-invert prose-lg w-full mx-auto">
          <PayloadRichText content={article.body} />
        </section>
      </article>
    </main>
  );
}