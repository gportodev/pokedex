import { NamedAPIResource } from './NamedAPIResourceDTO';
import { Name } from './NameDTO';
import { PokemonFormSprites } from './PokemonFormSpritesDTO';
import { PokemonFormType } from './PokemonFormType';
import { VersionGroup } from './VersionGroup';

export interface PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: NamedAPIResource<PokemonForm>;
  types: PokemonFormType[];
  sprites: PokemonFormSprites;
  version_group: NamedAPIResource<VersionGroup>;
  names: Name[];
  form_names: Name[];
}
