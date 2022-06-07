import rss from '@astrojs/rss';

import getPosts from '../utils/getPosts';

const posts = await getPosts();
const postItems = posts.map((post) => ({
  title: post.frontmatter.title,
  description: post.content.html,
  link: post.frontmatter.slug,
  pubDate: new Date(post.frontmatter.pubDate),
}));

export const get = () =>
  rss({
    title: 'Title',
    description: `Description`,
    site: 'https://example.com',
    items: postItems,
  });
