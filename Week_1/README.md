## Class Project (Week 1) - Monzo Reward Web App

#### Mapping Database Flow

![Database](./img/dbMockup.png)

#### Database Treeview
```bash
|-- user
    |-- user_id
    |-- user_name
    |-- transaction
    |   |-- transaction_id
    |   |-- transaction_description
    |   |-- merchant
    |       |-- merchant_id
    |       |-- merchant_name
    |-- reward
        |-- reward_id
        |-- reward_total
```

#### MongoDB User Listings

![MongoDb](./img/MongoDb.png)

#### Further Reading
- [Introduction to Mongoose for MongoDB](https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57)
- [JSON Schema](https://restfulapi.net/json-schema/)
- [Rules of Thumb for MongoDB Schema Design](https://keon.io/mongodb-schema-design/)
- [Building a REST API using Mongo DB](https://codeburst.io/building-a-rest-api-using-mongo-db-75cac3403fab)
