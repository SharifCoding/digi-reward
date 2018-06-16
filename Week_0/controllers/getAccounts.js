const request = require('request');

const getAccounts = (req, res) => {
  const accountsUrl = 'https://api.monzo.com/accounts';
  const { token_type, access_token } = global.accessToken;

  request.get(accountsUrl, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  }, (req, response, body) => {
    const { accounts } = JSON.parse(body);

    res.type('html');
    res.write('<h1>Accounts</h1><ul>');

    for (const account of accounts) {
      const { id, type, description } = account;
      res.write(`
              <li>
                ${description}(<i>${type}</i>) - <a href="/transactions/${id}">View transaction history</a>
              </li>
            `);
    }

    res.end('</ul>');
  });
};

module.exports = getAccounts;
