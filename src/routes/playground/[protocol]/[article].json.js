import send from '@polka/send';
import get_articles from './_articles.js';

let lookup;

export function get(req, res) {
  const { protocol } = req.params;

  if (!lookup || process.env.NODE_ENV !== 'production') {
    lookup = new Map();
    get_articles(protocol).forEach(article => {
      lookup.set(article.metadata.id, article);
    });
  }

  const article = lookup.get(req.params.article);

  if (article) {
    res.setHeader('Cache-Control', `max-age=${5 * 60 * 1e3}`); // 5 minutes
    send(res, 200, JSON.stringify(article));
  } else {
    send(res, 404, { message: 'Not Found' });
  }
}
