import rss from "@astrojs/rss";
import sanitizeHtml from 'sanitize-html';

const allPosts = import.meta.glob('../posts/*.md', { eager: true });

const posts = Object.values(allPosts);

posts.sort((a, b) => (a.frontmatter.id) - (b.frontmatter.id));

const sortedPosts = posts.reverse();

export const get = () => rss({
    title: "Dreamland Software News",
    description: "Curated web development and security news.",
    site: import.meta.env.PUBLIC_SITE,
    // stylesheet: '/rss/styles.xsl',
    items: sortedPosts.map((item) => ({
        
        title: item.frontmatter.title,
        description: item.frontmatter.description,
        link: item.url,
        pubDate: item.frontmatter.pubDate,
        content: sanitizeHtml(item.compiledContent())
    }))
});