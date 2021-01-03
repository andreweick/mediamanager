// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Artist, Photograph } = initSchema(schema);

export {
  Artist,
  Photograph
};