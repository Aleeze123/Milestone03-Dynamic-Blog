import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-200 p-4 sm:p-12 pt-24">
      <main className="flex-1 flex flex-col items-center sm:px-12 sm:py-16">
        <div className="text-center sm:text-left mb-8 sm:mb-12 max-w-3xl px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center text-black mb-6">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center mb-4 sm:mb-6 leading-tight font-light">
            Welcome to our blog! We share a variety of topics from technology and design to personal growth and creative endeavors. Our goal is to provide valuable insights and engaging content that inspires our readers.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 leading-tight md:leading-relaxed font-light">
            Join us as we explore new ideas, creative inspiration, and much more. Stay tuned for the latest posts and don’t forget to share your thoughts with us!
          </p>
        </div>
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 hover:shadow-lg hover:shadow-orange-500 transition-shadow duration-300">
          <Image
            src="/blog.jpeg"
            alt="About Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default About;
