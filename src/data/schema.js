import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType
} from 'graphql';

import { courseInfo } from './queries/learnJS';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      courseInfo
    },
  }),
});

export default schema;