import { Habitat } from './HabitatDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  habitat: NamedAPIResource<Habitat>;
}
