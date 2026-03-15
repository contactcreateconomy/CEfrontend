import {
  campaigns,
  categories,
  comments,
  defaultSettings,
  getTopPostHeroSlides as getTopPostHeroSlidesFromMock,
  leaderboard,
  notifications,
  posts,
  primaryNav,
  users,
  vibingItems,
} from "@/lib/mock-data";

export type { TopPostHeroSlide } from "@/lib/mock-data";

export function getPrimaryNav() {
  return primaryNav;
}

export function getCategories() {
  return categories;
}

export function getFeedData() {
  return {
    posts,
    comments,
    users,
  };
}

export function getVibingItems(limit = 10) {
  return vibingItems.slice(0, limit);
}

export function getCampaigns() {
  return campaigns;
}

export function getNotificationsForUser(userId: string) {
  return notifications.filter((notification) => notification.userId === userId);
}

export function getDefaultSettings() {
  return defaultSettings;
}

export function getTopPostHeroSlides() {
  return getTopPostHeroSlidesFromMock(posts);
}

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
