import { Generation } from './GenerationDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { PokemonTypeDTO } from './PokemonTypeDTO';

export interface PokemonTypePast {
  generation: NamedAPIResource<Generation>;
  types: PokemonTypeDTO[];
}
