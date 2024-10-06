import { NamedAPIResource } from './NamedAPIResourceDTO';
import { VersionGroup } from './VersionGroup';

export interface Version {
  id: number;
  name: string;
  version_group: NamedAPIResource<VersionGroup>;
}
