import { NamedAPIResource } from './NamedAPIResourceDTO';
import { Version } from './VersionDTO';

export interface PokemonHeldItemVersion {
  version: NamedAPIResource<Version>;
  rarity: number;
}
