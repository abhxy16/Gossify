import React from 'react';
import { Heart, MessageCircle, Share2, Eye, Flag } from 'lucide-react';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <p className="font-medium">Anonymous</p>
            <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {post.isFeatured && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
              Featured
            </span>
          )}
          <button className="text-gray-400 hover:text-gray-600">
            <Flag className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-900">{post.content}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-500 hover:text-red-500">
            <Heart className="w-5 h-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments.length}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-green-500">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <Eye className="w-4 h-4" />
          <span className="text-sm">{post.views}</span>
        </div>
      </div>
    </div>
  );
}