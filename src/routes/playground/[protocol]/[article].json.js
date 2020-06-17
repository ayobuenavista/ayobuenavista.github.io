import send from '@polka/send';
import get_articles from './_articles.js';

export function get(req, res) {
  const { protocol } = req.params;

  const articles = get_articles(protocol);

  if (!articles) {
    send(res, 404, JSON.stringify({ message: 'Not Found' }));
    return;
  }

  const lookup = new Map();

  articles.forEach((article) => {
    lookup.set(article.metadata.id, article);
  });

  const article = lookup.get(req.params.article);

  if (article) {
    send(res, 200, JSON.stringify(article));
  } else {
    send(res, 404, JSON.stringify({ message: 'Not Found' }));
  }
}
