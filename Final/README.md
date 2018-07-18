## Class Project (Final) - Monzo Reward Web App

![Reward](./Flow3_Reward.png)

Final Monzo reward web app with OAuth login page, reward progression, and active reward page.

<b>Please Note:</b>
This repository contain two repositories; Express/Mongoose API code is in [`/backend`](https://github.com/SharifCoding/digi-reward-back) directory (managing data), and React code is in [`/frontend`](https://github.com/SharifCoding/digi-reward-front) directory (frontend).

<b>Additionally:</b>
Active rewards will need to be populated with the database using the server file [`seed-rewards.js`](https://github.com/SharifCoding/digi-reward-back/blob/master/seeders/seed-rewards.js), by simply running the command `node seeders/seed-rewards.js` in it's path.

#### Setting up a Monzo client
- Create a client on Monzo - [https://docs.monzo.com/#authentication](https://docs.monzo.com/#authentication)
- Set *application name* as **monzo-reward-example**
- Set *homepage url* as **localhost:8080**
- Set *callback url* as **localhost:8080/login-monzo**
- take note of your client id and client secret - you will need them shortly

#### Initial Setup for [`/backend`](https://github.com/SharifCoding/digi-reward-back) directory:
- Create new MongoDB database and add new user
- Create `.env` file in the root `/backend` folder
- Add newly created Mongo string `DATABASE_URL=mongodb://user:password@ds123456.mlab.com:23456/database-name`
- Add `JWT_SECRET` to `.env` - this can be anything
- Add your client id, client secret, redirect url, and user id to `.env` as `MONZO_CLIENT_ID`, `MONZO_CLIENT_SECRET`, `REDIRECT_URL`, `USER_ID`.

#### Initial Setup for [`/frontend`](https://github.com/SharifCoding/digi-reward-front) directory:
- Create a `.env` in the `/frontend` directory with a `MONZO_CLIENT_ID` and `REDIRECT_URL`.

#### Running the App:
To run this project you will need to download it onto your local machine and install all dependencies.
Navigate inside both `/backend` and `/frontend` folders and install all dependencies by entering the following command on your terminal window:
```
npm install
```
Finally to run start API code and React code enter the following command in your terminal windows:
```
npm start --prefix backend
npm start --prefix frontend
```
This will run the server and frontend, open via localtunnel(make sure its running as well) url to view it in the browser. If you make any changes and save the changes process will automatically refresh and you will be able to see the results in the browser.

If you want to end the process hold `control` and press `c` in mac, if you are not using mac hold `ctrl` and press `c`.

[Return to README.md](../README.md)
