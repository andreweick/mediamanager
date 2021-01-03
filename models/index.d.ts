import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Artists {
  readonly id: string;
  readonly name: string;
  readonly Photographs?: (Photographs | null)[];
  constructor(init: ModelInit<Artists>);
  static copyOf(source: Artists, mutator: (draft: MutableModel<Artists>) => MutableModel<Artists> | void): Artists;
}

export declare class Photographs {
  readonly id: string;
  readonly name?: string;
  readonly artistsID: string;
  constructor(init: ModelInit<Photographs>);
  static copyOf(source: Photographs, mutator: (draft: MutableModel<Photographs>) => MutableModel<Photographs> | void): Photographs;
}