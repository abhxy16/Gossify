export interface User {
  id: string;
  username: string;
  points: number;
  badges: Badge[];
  rank: string;
  isOnline: boolean;
  createdAt: Date;
}

export interface Post {
  id: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  likes: number;
  views: number;
  comments: Comment[];
  isModerated: boolean;
  isFeatured: boolean;
  createdAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  pointsRequired: number;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  minPoints: number;
}

export interface Comment {
  id: string;
  content: string;
  author: string;
  likes: number;
  createdAt: Date;
}