import { Move } from './MoveDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { PokemonMoveVersion } from './PokemonMoveVersionDTO';

export interface PokemonMove {
  move: NamedAPIResource<Move>;
  version_group_details: PokemonMoveVersion[];
}
