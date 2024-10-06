import { MoveLearnMethod } from './MoveLearnMethod';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { VersionGroup } from './VersionGroup';

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource<MoveLearnMethod>;
  version_group: NamedAPIResource<VersionGroup>;
  level_learned_at: number;
}
