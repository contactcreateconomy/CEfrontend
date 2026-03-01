import {
  categories,
  comments,
  leaderboard,
  notifications,
  posts,
  users,
} from "@/lib/mock-data";

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getUserById(userId: string) {
  return users.find((user) => user.id === userId) ?? null;
}

export function getUserByHandle(handle: string) {
  return users.find((user) => user.handle === handle) ?? null;
}

export function getPostsByCategorySlug(slug: string) {
  return posts.filter((post) => post.category === slug);
}

export function getPostsByAuthor(authorId: string) {
  return posts.filter((post) => post.authorId === authorId);
}

export function getCommentsByPostId(postId: string) {
  return comments.filter((comment) => comment.postId === postId);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.key === slug) ?? null;
}

export function getUnreadNotifications(userId: string) {
  return notifications.filter((notification) => notification.userId === userId && !notification.read);
}

export function getLeaderboardWithUsers() {
  return leaderboard.map((entry) => ({
    ...entry,
    user: getUserById(entry.userId),
  }));
}
