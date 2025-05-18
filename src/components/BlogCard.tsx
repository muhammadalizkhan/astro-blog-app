import React from 'react';

interface BlogCardProps {
  title: string;
  subtitle: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  slug: string;
}

const BlogCard = ({ title, subtitle, date, author, category, coverImage, slug }: BlogCardProps) => {
  return (
    <a href={`/blog/${slug}`} className="block rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-md hover:shadow-xl transition">
      <img src={coverImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm text-indigo-400 uppercase tracking-wider">{category}</span>
        <h2 className="mt-2 text-xl font-bold text-white line-clamp-2">{title}</h2>
        <p className="mt-1 text-gray-300 line-clamp-2">{subtitle}</p>
        <div className="mt-3 text-sm text-gray-500">{date} · {author}</div>
      </div>
    </a>
  );
};

export default BlogCard;
