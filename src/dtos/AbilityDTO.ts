import { Generation } from './GenerationDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource<Generation>;
}
