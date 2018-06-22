const request = require('request');

const getTransactions = (req, res) => {
  const { acc_id } = req.params;
  const { token_type, access_token } = global.accessToken;
  const transactionsUrl = `https://api.monzo.com/transactions?expand[]=merchant&account_id=${acc_id}`;

  request.get(transactionsUrl, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  }, (req, response, body) => {
    const { transactions } = JSON.parse(body);

    res.type('html');
    res.write(`
            <h1>Transactions</h1>
            <table>
              <thead>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
              </thead>
              <tbody>
          `);

    for (const transaction of transactions) {
      const {
        description,
        amount,
        category,
      } = transaction;
      res.write(`
        <tr>
          <td>${description}</td>
          <td>&pound;${(amount / 100).toFixed(2)}</td>
          <td>${category}</td>
        </tr>
      `);
    }
    res.write('</tbody></table>');
    res.end('<br /><a href="/accounts">&lt; Back to accounts</a>');
  });
};

module.exports = getTransactions;
