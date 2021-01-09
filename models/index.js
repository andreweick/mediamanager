// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Photograph, Author } = initSchema(schema);

export {
  Photograph,
  Author
};