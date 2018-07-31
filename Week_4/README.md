## Class Project (Week 4) - Monzo Reward Web App

### Reward Flow (Four Stages)

![Database](./filterReward.png)

<b>Stage 1: Monzo API</b>
```js
// returns transaction details owned by the currently authorised user
request.get(`https://api.monzo.com/transactions?account_id=${accountID}`, {
  headers: { Authorization: `Bearer ${user.access_token}` },
})
.then((data) => {
  // parse string data from web server into a JavaScript object
  const response = JSON.parse(data);
  // group the merchants and assign to `reduceReward`
  const reduceReward = groupMerchant(response.transactions.map(
    transaction => transaction.merchant,
  ));
  // convert `reduceReward` from object to an array
  const arrayMerchant = Object.keys(reduceReward).map(
    key => [String(key), reduceReward[key]],
  );
  // filter list with `getRewardbyMerchant` function
  getRewardbyMerchant(arrayMerchant)
    // passing `rewards` from `getRewardbyMerchant` to frontend
    .then((rewards) => {
      res.send(rewards);
    });
});
```
<b>Stage 2: Backend API</b>
```js
// counting instances of values in an object
const groupMerchant = (merchant) => {
  // reduce() method reduces same Merchant ID in an array into a single value
  const countedMerchant = merchant.reduce((allMerchantID, merchantName) => {
    // multiple Merchant ID tallied up
    if (merchantName in allMerchantID) {
      allMerchantID[merchantName]++;
    // value 1 added to single Merchant ID
    } else {
      allMerchantID[merchantName] = 1;
    }
    return allMerchantID;
  }, {});
  return countedMerchant;
};
```
<b>Stage 3: Database</b>
```js
// get active reward data from database
const getRewardbyMerchant = (merchants) => {
  // new array consistings of desire merchants
  const merchantIds = merchants.map(merchant => merchant[0]);
  // find all merchant_id matching with active merchants
  return Rewards.find({
    // $in operator where the value of a field equals any value in the specified array
    merchant_id: { $in: merchantIds },
  }).then((rewards) => {
    // new array consistings of active merchants and complete reward data
    const activeRewards = rewards.map(
      reward => reward.toObject(),
    ).map((reward) => {
      // find merchant in merchants array where merchant[0] === reward.merchant_id
      const merchant = merchants.find(
        m => m[0] === reward.merchant_id,
      );
      // set count property on reward to merchant[1]
      reward.count = merchant[1];
      // return updated reward
      return reward;
    });
    return activeRewards;
  });
};
```
<b>Stage 4: Frontend APP</b>
```js
// get transaction from backend
axios.get('http://127.0.0.1:3000/transaction')
  // return data added to state
  .then((response) => { this.setState({ rewards: response.data });
  })
render() {
const { rewards } = this.state;
  return (
    <ul className="rewards rewards__list">
    {
      // map return data to frontend UI
      rewards.map(reward => (
      <Reward
        key={reward._id}
        description={reward.description}
        logo={reward.merchant_logo}
        count={reward.count}
      />
      ))
    }
```

#### Further Reading
- [Array.prototype.reduce() - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [db.collection.find() - MongoDB Manual](https://docs.mongodb.com/manual/reference/method/db.collection.find/)
- [$in - MongoDB Manual](https://docs.mongodb.com/manual/reference/operator/query/in/)
- [Array.prototype.map() - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[Return to README.md](../README.md)
