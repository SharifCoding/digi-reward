const getAuthorise = (req, res) => {
  const monzoAuthUrl = 'https://auth.monzo.com';

  res.type('html');
  res.send(`
      <h1>Hello</h1>
      <form action="${monzoAuthUrl}">
        <input type="hidden" name="client_id" value="${process.env.CLIENT_ID}" />
        <input type="hidden" name="redirect_uri" value="${process.env.REDIRECT_URL}" />
        <input type="hidden" name="response_type" value="code" />
        <button>Authorise app</button>
      </form>
    `);
};

module.exports = getAuthorise;
