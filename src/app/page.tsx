import React from 'react';
import About from './About/page';
import Blog from './Blog/page';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-200 p-12 pt-24">
      <main className="flex-1 flex flex-col sm:flex-row items-center justify-center px-6 py-12 sm:px-12 sm:py-16">
        <div className="sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0 sm:mr-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-black mb-6 tracking-wide">
            Welcome to BlogSphere
          </h1>

          <p className="text-base sm:text-lg text-gray-800 mb-12 leading-relaxed font-light">
            Dive into a world of insightful articles, tips, and stories. Stay updated with the latest posts and explore a range of topics curated to spark your interest and expand your knowledge.
          </p>

          <a
            href="/Blog"
            className="inline-block bg-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-110 focus:ring-4 focus:ring-orange-300"
          >
            View Latest Posts
          </a>
        </div>

        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
          <Image
            src="/home.jpeg"
            alt="Blog Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>

      <About />
      <Blog />
    </div>
  );
};

export default Home;
