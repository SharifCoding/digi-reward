## Class Project (Week 3) - Monzo Reward Web App with Progress Bar
Using [rc-progress](http://react-component.github.io/progress/) created mockup of reward progression and displaying Monzo username forwarded from the Monzo APi.

![Monzo Reward](./monzoReward.png)

<b>Please Note:</b>
This repository contain two repositories; Express/Mongoose API code is in [`/backend`](./backend/README.md) directory (managing data), and React code is in [`/frontend`](./frontend/README.md) directory (frontend).

#### Setting up a Monzo client
- Create a client on Monzo - [https://docs.monzo.com/#authentication](https://docs.monzo.com/#authentication)
- Set *application name* as **authentication-example**
- Set *homepage url* as **localhost:8080**
- Set *callback url* as **localhost:8080/login-monzo**
- take note of your client id and client secret - you will need them shortly

#### Initial Setup for `/backend` directory:
- Create new MongoDB database and add new user
- Create `.env` file in the root `/backend` folder
- Add newly created Mongo string `DATABASE_URL=mongodb://user:password@ds123456.mlab.com:23456/database-name`
- Add `JWT_SECRET` to `.env` - this can be anything
- Add your client id, client secret, redirect url, and user id to `.env` as `MONZO_CLIENT_ID`, `MONZO_CLIENT_SECRET`, `REDIRECT_URL`, `USER_ID`.

#### Initial Setup for `/frontend` directory:
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

#### Further Reading
[rc-progress](http://react-component.github.io/progress/)
