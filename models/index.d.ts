import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Photograph {
  readonly id: string;
  readonly name: string;
  readonly ExposureTime?: string;
  readonly FNumber?: string;
  readonly ISO?: string;
  readonly DateTimeOriginal?: string;
  readonly ShutterSpeed?: string;
  readonly Title?: string;
  readonly Caption?: string;
  readonly Height?: number;
  readonly Width?: number;
  readonly GPSLatitude?: string;
  readonly GPSLongitude?: string;
  readonly GPSAltitude?: string;
  readonly hash: string;
  constructor(init: ModelInit<Photograph>);
  static copyOf(source: Photograph, mutator: (draft: MutableModel<Photograph>) => MutableModel<Photograph> | void): Photograph;
}

export declare class Author {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}