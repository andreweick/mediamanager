import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Artist {
  readonly id: string;
  readonly name: string;
  readonly Photographs?: (Photograph | null)[];
  constructor(init: ModelInit<Artist>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist>) => MutableModel<Artist> | void): Artist;
}

export declare class Photograph {
  readonly id: string;
  readonly name?: string;
  readonly artistsID: string;
  constructor(init: ModelInit<Photograph>);
  static copyOf(source: Photograph, mutator: (draft: MutableModel<Photograph>) => MutableModel<Photograph> | void): Photograph;
}