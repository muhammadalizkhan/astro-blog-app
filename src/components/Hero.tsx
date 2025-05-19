import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

interface Tag {
  id?: string;
  title: string;
}

interface Category {
  id?: string;
  title: string;
}

interface Article {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  author: string;
  tags: (Tag | string)[];
  category: Category | string;
  datetime: string;
}

interface HeroProps {
  mainMarginLeft: string;
  mainMarginTop: string;
}

const POSTS_PER_PAGE = 2;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function Hero({ mainMarginLeft, mainMarginTop }: HeroProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      `http://localhost:3000/api/articles?limit=${POSTS_PER_PAGE}&page=${currentPage}&depth=1`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then((data) => {
        setArticles(data.docs || []);
        setTotalPages(data.totalPages || 1);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <main
        className={`transition-all duration-300 ease-in-out ${mainMarginLeft} ${mainMarginTop} p-6 w-full`}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-light mb-10 text-center tracking-tight text-white/90">
            MindRush AI Blog
          </h1>

          {loading && <p className="text-center">Loading articles...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          <ul className="space-y-8">
            {!loading &&
              !error &&
              articles.map((post) => (
                <li
                  key={post.id}
                  className="bg-zinc-900 rounded-lg p-5 hover:bg-zinc-800 transition-colors"
                >
                  <a
                    href={`/articles/${post.id}`}
                    className="block hover:no-underline"
                  >
                    <div className="flex justify-between items-center text-xs text-zinc-500 mb-2">
                      <span>
                        {typeof post.category === "string"
                          ? post.category
                          : post.category?.title}
                      </span>
                      <span>{formatDate(post.datetime)}</span>
                    </div>
                    <h2 className="text-xl font-medium mb-1">{post.title}</h2>
                    <p className="text-sm text-zinc-400 mb-1">{post.subtitle}</p>
                    <p className="text-sm text-zinc-300 mb-3">{post.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-zinc-500">
                        by {post.author}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(post.tags) &&
                          post.tags.map((tag, idx) => (
                            <span
                              key={
                                typeof tag === "string"
                                  ? tag
                                  : tag.id || tag.title || idx
                              }
                              className="text-xs border border-blue-500 text-blue-400 px-2 py-0.5 rounded-full"
                            >
                              #
                              {typeof tag === "string"
                                ? tag
                                : tag.title}
                            </span>
                          ))}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
    </div>
  );
}