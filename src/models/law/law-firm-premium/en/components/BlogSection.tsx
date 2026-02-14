import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';

const posts = [
  {
    title: "Consumer Rights in Online Shopping",
    excerpt: "With the rise of e-commerce, it is essential to understand your rights regarding return periods, legal warranties, and cooling-off periods.",
    date: "12 Mar 2024",
    author: "Dr. Carlos Silva",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Succession Planning: Where to start?",
    excerpt: "Discover how succession planning can avoid future family conflicts and significantly reduce probate costs and bureaucracy.",
    date: "08 Mar 2024",
    author: "Dr. Carlos Silva",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "New Labor Law and Home Office",
    excerpt: "The main changes and regulations for remote and hybrid work in current legislation. What companies and employees need to know.",
    date: "25 Feb 2024",
    author: "Dr. Carlos Silva",
    image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-900 border-t border-neutral-800" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-widest mb-2">Legal Blog</h3>
            <h2 className="font-serif text-4xl text-white">Articles and Insights</h2>
          </div>
          <a href="#" className="group flex items-center gap-2 text-gold-500 hover:text-white transition-colors pb-2 border-b border-gold-500/30 hover:border-white">
            View all articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="flex flex-col group bg-neutral-950 rounded-sm overflow-hidden border border-neutral-800 hover:border-gold-600/30 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gold-500" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-gold-500" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                    <span className="text-gold-500 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                    Read full article
                    </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};