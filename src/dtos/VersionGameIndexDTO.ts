import { NamedAPIResource } from './NamedAPIResourceDTO';
import { Version } from './VersionDTO';

export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource<Version>;
}
