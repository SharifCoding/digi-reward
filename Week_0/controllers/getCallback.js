const request = require('request');

const getCallback = (req, res) => {
  const { code } = req.query;
  const monzoAuthUrl = 'https://api.monzo.com/oauth2/token';

  request.post({
    url: monzoAuthUrl,
    form: {
      grant_type: 'authorization_code',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URL,
      code,
    },
  }, (err, response, body) => {
    global.accessToken = JSON.parse(body);
    res.redirect('/accounts');
  });
};

module.exports = getCallback;
