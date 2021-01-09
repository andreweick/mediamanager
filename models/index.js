// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Video, Audio, Photograph, Author } = initSchema(schema);

export {
  Video,
  Audio,
  Photograph,
  Author
};