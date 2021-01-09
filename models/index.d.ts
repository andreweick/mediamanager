import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Video {
  readonly id: string;
  readonly name?: string;
  readonly s3location: string;
  readonly authorID: string;
  constructor(init: ModelInit<Video>);
  static copyOf(source: Video, mutator: (draft: MutableModel<Video>) => MutableModel<Video> | void): Video;
}

export declare class Audio {
  readonly id: string;
  readonly name?: string;
  readonly s3location: string;
  readonly authorID: string;
  constructor(init: ModelInit<Audio>);
  static copyOf(source: Audio, mutator: (draft: MutableModel<Audio>) => MutableModel<Audio> | void): Audio;
}

export declare class Photograph {
  readonly id: string;
  readonly name?: string;
  readonly s3location: string;
  readonly authorID: string;
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
  readonly GSPLongitude?: string;
  readonly GPSAltitude?: string;
  readonly hash?: string;
  constructor(init: ModelInit<Photograph>);
  static copyOf(source: Photograph, mutator: (draft: MutableModel<Photograph>) => MutableModel<Photograph> | void): Photograph;
}

export declare class Author {
  readonly id: string;
  readonly name: string;
  readonly photographs?: (Photograph | null)[];
  readonly videos?: (Video | null)[];
  readonly audios?: (Audio | null)[];
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}