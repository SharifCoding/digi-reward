## Class Project (Frontend) - Monzo Reward Web App

Backend repo: [digi-reward-back](../digi-reward-back/)

#### File Structure
```
project
|-- src
|   |-- assets
|   |   |-- check.gif (animated green tick)
|   |   |-- indespendent.svg (app logo)
|   |   |-- logo.svg (monzo logo)
|   |   |-- monzo-bg.png (login background)
|   |   |-- whirly.png (loading animation)
|   |
|   |-- components
|   |   |-- Account
|   |   |   |-- index.jsx (request account data from backend)
|   |   |   |-- style.scss
|   |   |
|   |   |-- BigTick
|   |   |   |-- index.jsx (container for green tick)
|   |   |   |-- style.scss
|   |   |
|   |   |-- Loader
|   |   |   |-- index.jsx (container for loading animation)
|   |   |   |-- style.scss
|   |   |
|   |   |-- Login
|   |   |   |-- index.jsx (request monzo login via https)
|   |   |   |-- style.scss
|   |   |
|   |   |-- Logo
|   |   |   |-- index.jsx (container for app logo)
|   |   |   |-- style.scss
|   |   |
|   |   |-- Map
|   |   |   |-- index.jsx (google map setup and reward data request from backend)
|   |   |   |-- style.scss
|   |   |
|   |   |-- MerchantLogo
|   |   |   |-- index.jsx (container for merchant logo)
|   |   |
|   |   |-- NavBar
|   |   |   |-- index.jsx (render navigation bar)
|   |   |   |-- style.scss
|   |   |
|   |   |-- Reward
|   |   |   |-- index.jsx (calling components MerchantLogo, RewardDescription, RewardProgress, and TransactionCounter)
|   |   |   |-- style.scss
|   |   |
|   |   |-- RewardDescription
|   |   |   |-- index.jsx (merchant name/description)
|   |   |   |-- style.scss
|   |   |
|   |   |-- RewardProgress
|   |   |   |-- index.jsx (react progression bar `rc-progress`)
|   |   |   |-- style.scss
|   |   |
|   |   |-- Rewards
|   |   |   |-- index.jsx (request transaction data from backend)
|   |   |
|   |   |-- TransactionCounter
|   |   |   |-- index.jsx (number of transaction)
|   |   |
|   |   |-- auth-route.jsx (authenticated login route)
|   |   |-- monzo-login.jsx (request monzo login from backend)
|   |
|   |-- utils
|   |   |-- token-manager.js (get token after authentication)
|   |
|   |-- app.jsx (app routes)
|   |-- index.jsx (render app)
|   |-- style.scss
|   |-- vars.scss
|
|-- index.html (!DOCTYPE html)
```
