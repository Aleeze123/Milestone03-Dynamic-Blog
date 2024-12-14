'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Post {
  id: string;
  title: string;
  summary: string;
  image: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    summary: 'Exploring the latest trends in web development and what to expect in the coming years.',
    image: '/future.jpeg',
  },
  {
    id: '2',
    title: 'Design Tips for Modern UI',
    summary: 'How to create sleek, modern designs that captivate users.',
    image: '/img3.jpeg',
  },
  {
    id: '3',
    title: 'Node.js for Backend Development',
    summary: 'Learn why Node.js is a powerful choice for backend development.',
    image: '/first.jpeg',
  },
  {
    id: '4',
    title: 'Next.js for Fullstack Development',
    summary: 'Why Next.js is a great choice for building fullstack web applications.',
    image: '/A.jpeg',
  },
  {
    id: '5',
    title: 'CSS Grid vs Flexbox: When to Use What',
    summary: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox.',
    image: '/img1.jpeg',
  },
  {
    id: '6',
    title: 'Responsive Design Best Practices',
    summary: 'Tips and tricks to make your web pages responsive across all devices.',
    image: '/responsive.jpeg',
  },
  {
    id: '7',
    title: 'Understanding TypeScript: A Beginner’s Guide',
    summary: 'An introduction to TypeScript and its benefits for JavaScript developers.',
    image: '/img6.jpeg',
  },
  {
    id: '8',
    title: 'React State Management',
    summary: 'Learn the various ways to manage state in React applications.',
    image: '/pro.jpeg',
  },
  {
    id: '9',
    title: 'Tailwind CSS Tips and Tricks',
    summary: 'Get more out of Tailwind CSS with these advanced tips and tricks.',
    image: '/img.jpeg',
  },
];
const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-200 p-4 sm:p-6 md:p-12 pt-24 md:pt-32">
  <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center text-black mb-6">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {posts.slice(0, visiblePosts).map((post) => (
          <div
            key={post.id}
            className="bg-orange-100 shadow-lg rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mx-auto w-full flex flex-col"
          >
            <Link href={`/Blog/${post.id}`} className="relative w-full h-48 sm:h-56 lg:h-64">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </Link>
            <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 h-full">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 hover:text-yellow-600">
                {post.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 line-clamp-3">
                {post.summary}
              </p>
              <Link href={`/Blog/${post.id}`} className="text-yellow-600 font-medium hover:underline transition-all duration-300">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-8 sm:mt-12">
          <button
            onClick={loadMorePosts}
            className="bg-orange-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-orange-700 transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
export default BlogPage;
