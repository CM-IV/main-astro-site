import rss from "@astrojs/rss";
import { marked } from "marked";
import sanitizeHTML from "sanitize-html";

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    smartypants:true
})

const allPosts = import.meta.glob('../posts/*.md', { eager: true });

const posts = Object.values(allPosts);

posts.sort((a, b) => (a.frontmatter.id) - (b.frontmatter.id));

const sortedPosts = posts.reverse();

export const get = () => rss({
    title: "Dreamland Software News",
    description: "Curated web development and security news.",
    site: import.meta.env.SITE,
    // stylesheet: '/rss/styles.xsl',
    items: sortedPosts.map((item) => ({
        title: item.frontmatter.title,
        description: item.frontmatter.description,
        link: item.url,
        pubDate: item.frontmatter.pubDate,
        content: sanitizeHTML(marked.parse(item.rawContent(), {
            allowedTags: false,
            allowedAttributes: false
        })),
    }))
});