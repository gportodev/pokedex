import { Language } from './Language';
import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface Name {
  name: string;
  language: NamedAPIResource<Language>;
}
