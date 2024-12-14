'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const posts = [
    {
        id: '1',
        title: 'The Future of Web Development',
        summary: 'Exploring the latest trends in web development...',
        content: 'The future of web development is dynamic and constantly evolving. As technologies like AI, machine learning, and serverless computing continue to grow, we are seeing new paradigms emerge. Developers are now adopting a more modular approach, using frameworks like Next.js, React, and Web Components to build scalable applications. The focus is shifting to performance optimization, accessibility, and a seamless user experience.',
    },
    {
        id: '2',
        title: 'Design Tips for Modern UI',
        summary: 'How to create sleek, modern designs...',
        content: 'Creating a modern user interface is about making a product simple, intuitive, and visually appealing. The use of minimalism in design has taken center stage, with ample white space and flat design principles being widely adopted. Modern UI design prioritizes usability, ensuring users can navigate apps and websites with ease. Typography and color contrast play crucial roles in improving readability and user engagement.',
    },
    {
        id: '3',
        title: 'Node.js for Backend Development',
        summary: 'Learn why Node.js is a powerful choice for backend development.',
        content: 'Node.js has revolutionized backend development by offering a non-blocking, event-driven architecture that is ideal for building scalable applications. It allows developers to use JavaScript for both the client-side and server-side, reducing context switching. With tools like Express.js and frameworks such as NestJS, Node.js is the go-to solution for modern web apps that require high concurrency and real-time features.',
    },
    {
        id: '4',
        title: 'Next.js for Fullstack Development',
        summary: 'Why Next.js is a great choice for building fullstack web applications.',
        content: 'Next.js has quickly become a favorite among developers for building full-stack web applications. With built-in server-side rendering (SSR), static site generation (SSG), and easy API routes, Next.js allows developers to quickly build SEO-friendly web applications. It integrates seamlessly with React, providing a great developer experience while enabling both frontend and backend logic in a single framework.',
    },
    {
        id: '5',
        title: 'CSS Grid vs Flexbox: When to Use What',
        summary: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox.',
        content: `CSS Grid and Flexbox are two powerful layout systems in CSS, but each serves different purposes. 
        `,
    },
    {
        id: '6',
        title: 'Responsive Design Best Practices',
        summary: 'Tips and tricks to make your web pages responsive across all devices.',
        content: `Responsive design ensures that your web pages look good on all devices, from mobile phones to desktops.`,
    },
    {
        id: '7',
        title: 'Understanding TypeScript: A Beginner’s Guide',
        summary: 'An introduction to TypeScript and its benefits for JavaScript developers.',
        content: `TypeScript is a statically typed superset of JavaScript that adds type annotations. It helps developers catch type-related errors early.`,
    },
    {
        id: '8',
        title: 'React State Management',
        summary: 'Learn the various ways to manage state in React applications.',
        content: `In React, state management is key to handling data in your components. 
        We'll explore these methods and discuss when to use each for efficient React development.`,
    },
    {
        id: '9',
        title: 'Tailwind CSS Tips and Tricks',
        summary: 'Get more out of Tailwind CSS with these advanced tips and tricks.',
        content: `Tailwind CSS is a utility-first framework that allows for fast, custom designs. Key tips include:
        These techniques will help you build optimized, scalable websites with Tailwind CSS.`,
    },
];

const PostPage = () => {
    const { id } = useParams(); 
    const post = posts.find((p) => p.id === id); 

    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');
    useEffect(() => {
        const storedComments = localStorage.getItem(`comments-${id}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [id]);

    const addComment = () => {
        if (newComment.trim()) {
            const updatedComments = [...comments, newComment.trim()];
            setComments(updatedComments);
            setNewComment('');
            localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
        }
    };

    if (!post) {
        return <div className="text-center py-10 text-lg text-red-500">Post not found</div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-200 p-6 sm:p-12 pt-16 md:pt-24">
            <div className="container mx-auto mt-8 md:mt-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">{post.title}</h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">{post.content}</p>

                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mt-8 sm:mt-10">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Comments</h2>

                    <div className="mb-6">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a comment..."
                            className="border border-gray-300 p-3 w-full mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            onClick={addComment}
                            className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300"
                        >
                            Add Comment
                        </button>
                    </div>
                    <div>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div key={index} className="border-t border-gray-200 pt-2">
                                    <p className="text-gray-700">{comment}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPage;
