import { NamedAPIResource } from './NamedAPIResourceDTO';
import { Type } from './TypeDTO';

export interface PokemonType {
  slot: number;
  type: NamedAPIResource<Type>;
}
