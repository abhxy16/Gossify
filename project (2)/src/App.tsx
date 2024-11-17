import React from 'react';
import { Plus } from 'lucide-react';
import Layout from './components/Layout';
import PostCard from './components/PostCard';

const MOCK_POSTS = [
  {
    id: '1',
    content: "I've been pretending to be a senior developer at my company for 6 months now. Thanks to GPT, no one has noticed yet. The imposter syndrome is real, but I'm learning fast!",
    author: 'anonymous',
    category: 'Confessions',
    tags: ['work', 'tech', 'confession'],
    likes: 234,
    views: 1205,
    comments: [],
    isModerated: true,
    isFeatured: true,
    createdAt: new Date('2024-03-10'),
  },
  {
    id: '2',
    content: "Today I helped a stranger who dropped their groceries, but instead of feeling good about it, I felt awkward because they insisted on buying me coffee as thanks. Why is it so hard to accept kindness from others?",
    author: 'anonymous',
    category: 'Life',
    tags: ['kindness', 'life', 'thoughts'],
    likes: 156,
    views: 892,
    comments: [],
    isModerated: true,
    isFeatured: false,
    createdAt: new Date('2024-03-11'),
  }
];

function App() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Latest Stories</h2>
            <p className="text-gray-500">Share your secrets anonymously</p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="w-5 h-5" />
            <span>New Story</span>
          </button>
        </div>

        <div className="space-y-6">
          {MOCK_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default App;