import { Client, cacheExchange, fetchExchange } from '@urql/core';

const client = new Client({
  url: 'https://kuzguni.hasura.app/v1/graphql',
  exchanges: [cacheExchange, fetchExchange],
/*
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
*/
});

module.exports={
    client
}


/*
    const dbName = 'users';
    const collName = 'AllUsers';
    const db  = client.db(dbName);
    const collection = db.collection(collName);

    if(db && collection) console.log("DB and Collection good to go!");

    return{
        DB:db,
        Coll:collection
    }
*/