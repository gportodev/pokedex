import { NamedAPIResource } from './NamedAPIResourceDTO';
import { PokemonSpecies } from './PokemonSpeciesDTO';

export interface Habitat {
  id: number;
  name: string;
  pokemon_species: NamedAPIResource<PokemonSpecies>[];
}
