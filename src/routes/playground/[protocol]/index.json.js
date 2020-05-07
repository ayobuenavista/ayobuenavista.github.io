import send from '@polka/send';
import get_articles from './_articles.js';

let json;

export function get(req, res) {
  const { protocol } = req.params;

  if (!json || process.env.NODE_ENV !== 'production') {
    const articles = get_articles(protocol).map(article => {
      return {
        metadata: article.metadata,
      };
    });

    json = JSON.stringify(articles);
  }

  send(res, 200, json, {
    'Content-Type': 'application/json',
    'Cache-Control': `max-age=${5 * 60 * 1e3}`, // 5 minutes
  });
}
