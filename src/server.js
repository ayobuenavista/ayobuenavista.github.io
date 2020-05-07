import compression from 'compression';
import polka from 'polka';
import send from '@polka/send';
import sirv from 'sirv';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = polka({
  onError: (err, req, res) => {
    const error = err.message || err;
    const code = err.code || err.status || 500;
    res.headersSent || send(res, code, { error });
  },
});

app.use(
  compression({ threshold: 0 }),
  sirv('static', {
    dev,
    setHeaders(res) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.hasHeader('Cache-Control') ||
        res.setHeader('Cache-Control', 'max-age=600'); // 10min default
    },
  }),
  sapper.middleware()
);

app.listen(PORT, err => {
  if (err) console.log('error', err);
});
