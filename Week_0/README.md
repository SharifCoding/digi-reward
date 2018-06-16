## Class Project (Week 0) - Monzo Reward Web App

### Built-on:
- [Node.js](https://nodejs.org/en/) - Node Package Manager
- [Express](http://expressjs.com/) - Web application framework
- [OAuth2.0](https://auth0.com/) - Grant limited access to an HTTP service
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables

#### Initial Setup for `oauthDetails`:
- Create new client database called via Monzo developer portal
- Create `.env` file in the root `/` folder along side `package.json`
- Add `client_id`, `client_secret`, and `http://localhost:3000/oauth/callback` to `.env` file
```bash
CLIENT_ID="your client id"
CLIENT_SECRET="your client secret"
REDIRECT_URL="http://localhost:3000/oauth/callback"
```
#### Running the App:
To run this project you will need to download it onto your local machine and install all dependencies.
Navigate inside the folders and install all dependencies and run the app by entering the following command on your terminal window:
```bash
# install dependencies
npm install
# launch app on localhost:3000
npm start
```
If you want to end the process hold `control` and press `c` in mac, if you are not using mac hold `ctrl` and press `c`.
