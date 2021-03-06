import { langs } from '@sveltejs/site-kit/utils/markdown.js';
import PrismJS from '@/utils/prism.js';
import 'prism-svelte';

export function highlight(source, lang) {
  const plang = langs[lang] || lang;
  const highlighted = plang
    ? PrismJS.highlight(source, PrismJS.languages[plang], lang)
    : source.replace(
        /[&<>]/g,
        (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])
      );

  return `<pre class='language-${plang}'><code>${highlighted}</code></pre>`;
}
