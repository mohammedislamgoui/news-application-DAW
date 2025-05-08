export interface Comment {
  id: string;
  userId: string;
  username: string;
  content: string;
  createdAt: string;
}

export interface Article {
  id: string;
  title: string;
  thumbnail: string;
  content: string;
  summary: string;
  viewCount: number;
  likes: number;
  dislikes: number;
  comments: Comment[];
  publishedAt: string;
  category: string;
}

export interface UserProfile {
  id: string;
  username: string;
  viewedArticles: string[];
  likedArticles: string[];
  dislikedArticles: string[];
}