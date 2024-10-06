import { Generation } from './GenerationDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { PokemonType } from './PokemonTypeDTO';

export interface PokemonTypePast {
  generation: NamedAPIResource<Generation>;
  types: PokemonType[];
}
