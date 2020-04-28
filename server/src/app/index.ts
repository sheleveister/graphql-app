import express, { Express } from 'express';
import mongoose, { Connection } from 'mongoose';
import cors from 'cors';
import schema from '../schema/schema';
import graphqlHTTP, { Options } from 'express-graphql';

const index: Express = express();
const PORT: number = 3005;

mongoose.connect(
  'mongodb://localhost:27017/ARCHITECT_DATABASE',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

index.use(cors());

const graphqlHttpOptions: Options = {
  schema,
  graphiql: true,
};

index.use('/graphql', graphqlHTTP(graphqlHttpOptions));

const dbConnection: Connection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

index.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});
