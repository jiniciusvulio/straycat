export type User = {
  id: string;
  name: string;
  username: string;
  image?: string;
}

export type PostType = {
  id: string;
  content: string;
  user: User;
  createdAt: string;
  image?: string;
  comments?: number,
  reposts?: number,
  likes?: number,
  impressions?: number,
}