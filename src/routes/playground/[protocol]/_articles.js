import fs from 'fs';
import path from 'path';
import marked from 'marked';
import toc from 'markdown-toc';
import {
  extract_frontmatter,
  link_renderer,
} from '@sveltejs/site-kit/utils/markdown.js';
import { highlight } from '@/utils/highlight.js';

export default function get_articles(protocol) {
  const PATH = `static/articles/${protocol}`;

  if (protocol === undefined) return;
  if (!fs.existsSync(PATH)) return;

  return fs.readdirSync(PATH).map(file => {
    if (path.extname(file) !== '.md') return;
    if (!fs.existsSync(`${PATH}/${file}`)) return;

    const markdown = fs.readFileSync(`${PATH}/${file}`, 'utf-8');
    const renderer = new marked.Renderer();

    const { content, metadata } = extract_frontmatter(markdown);
    const deeplinks = toc(content).json;

    renderer.link = link_renderer;
    renderer.code = highlight;
    renderer.heading = (text, level) => {
      const deeplink = text.toLowerCase().replace(/[^\w]+/g, '-');

      return `
        <h${level} id="${deeplink}" class="relative">
          <a
            href="playground/${protocol}/${metadata.id}#${deeplink}"
            class="anchor" aria-hidden="true"
          ></a>
          ${text}
        </h${level}>`;
    };

    const html = marked(
      content.replace(/^\t+/gm, match => match.split('\t').join('  ')),
      { renderer }
    );

    return {
      html,
      deeplinks,
      metadata,
    };
  });
}
