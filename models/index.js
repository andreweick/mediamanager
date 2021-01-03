// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Artists, Photographs } = initSchema(schema);

export {
  Artists,
  Photographs
};