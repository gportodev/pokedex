import { Ability } from './AbilityDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { Type } from './TypeDTO';

export interface Generation {
  id: number;
  name: string;
  abilities: NamedAPIResource<Ability>[];
  types: NamedAPIResource<Type>[];
}
