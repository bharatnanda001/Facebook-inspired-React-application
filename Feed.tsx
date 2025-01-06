import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    content: 'Just finished my morning workout! 💪 Feeling energized and ready for the day ahead.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    time: '2h',
    likes: 324,
    comments: 42,
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'Beautiful sunset at the beach today! 🌅',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    time: '4h',
    likes: 892,
    comments: 76,
  },
];

export default function Feed() {
  return (
    <div className="max-w-2xl mx-auto pt-20 pb-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-sm mb-4">
          <div className="p-4">
            <div className="flex items-center">
              <img
                src={post.avatar}
                alt={post.author}
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold">{post.author}</p>
                <p className="text-gray-500 text-sm">{post.time}</p>
              </div>
            </div>
            <p className="mt-3">{post.content}</p>
          </div>
          
          {post.image && (
            <img
              src={post.image}
              alt="Post content"
              className="w-full max-h-[600px] object-cover"
            />
          )}
          
          <div className="p-4">
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <span>{post.likes} likes</span>
              <span>{post.comments} comments</span>
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <Heart className="h-5 w-5" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <MessageCircle className="h-5 w-5" />
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}