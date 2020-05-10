import send from '@polka/send';
import published from '@/conf/published.js';
import get_articles from './_articles.js';

let json;

function ordering(protocol) {
  let order = published[protocol];

  return function(a, b) {
    if (order.indexOf(a.metadata.id) < order.indexOf(b.metadata.id)) {
      return -1;
    } else if (order.indexOf(a.metadata.id) > order.indexOf(b.metadata.id)) {
      return 1;
    } else {
      return 0;
    }
  };
}

export function get(req, res) {
  const { protocol } = req.params;

  if (!json || process.env.NODE_ENV !== 'production') {
    let articles = get_articles(protocol).map(article => {
      let { metadata } = article;

      return {
        metadata,
      };
    });

    articles = articles.filter(e => {
      return published[protocol].includes(e.metadata.id);
    });

    articles.sort(ordering(protocol)),

    json = JSON.stringify(articles);
  }

  send(res, 200, json, {
    'Content-Type': 'application/json',
  });
}
