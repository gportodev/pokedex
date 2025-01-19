import { FC, SVGProps } from 'react';
import {
  BugIcon,
  DarkIcon,
  DragonIcon,
  ElectricIcon,
  FairyIcon,
  FightingIcon,
  FireIcon,
  FlyingIcon,
  GhostIcon,
  GrassIcon,
  GroundIcon,
  IceIcon,
  NormalIcon,
  PoisonIcon,
  PsychicIcon,
  RockIcon,
  SteelIcon,
  WaterIcon,
} from '@/assets/icons/Loader';
import colors from '@/constants/colors';

//Icon types

type PokemonType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

const iconMap: Record<PokemonType, FC<SVGProps<SVGSVGElement>>> = {
  bug: BugIcon as FC<SVGProps<SVGSVGElement>>,
  dark: DarkIcon as FC<SVGProps<SVGSVGElement>>,
  dragon: DragonIcon as FC<SVGProps<SVGSVGElement>>,
  electric: ElectricIcon as FC<SVGProps<SVGSVGElement>>,
  fairy: FairyIcon as FC<SVGProps<SVGSVGElement>>,
  fighting: FightingIcon as FC<SVGProps<SVGSVGElement>>,
  fire: FireIcon as FC<SVGProps<SVGSVGElement>>,
  flying: FlyingIcon as FC<SVGProps<SVGSVGElement>>,
  ghost: GhostIcon as FC<SVGProps<SVGSVGElement>>,
  grass: GrassIcon as FC<SVGProps<SVGSVGElement>>,
  ground: GroundIcon as FC<SVGProps<SVGSVGElement>>,
  ice: IceIcon as FC<SVGProps<SVGSVGElement>>,
  normal: NormalIcon as FC<SVGProps<SVGSVGElement>>,
  poison: PoisonIcon as FC<SVGProps<SVGSVGElement>>,
  psychic: PsychicIcon as FC<SVGProps<SVGSVGElement>>,
  rock: RockIcon as FC<SVGProps<SVGSVGElement>>,
  steel: SteelIcon as FC<SVGProps<SVGSVGElement>>,
  water: WaterIcon as FC<SVGProps<SVGSVGElement>>,
};

function getIconFromType(type: PokemonType): FC<SVGProps<SVGSVGElement>> {
  return iconMap[type];
}

//Tag type

type TypeColor = {
  background: string;
  text: string;
};

const tagMap: Record<PokemonType, TypeColor> = {
  fire: {
    background: colors.strong_orange_red_10, // Strong Red-Orange
    text: colors.strong_red, // Strong Red-Orange
  },
  grass: {
    background: colors.bold_forest_green_10, // Bold Forest Green
    text: colors.bold_forest_green, // Bold Forest Green
  },
  water: {
    background: colors.strong_blue_10, // Strong Blue
    text: colors.strong_blue, // Strong Blue
  },
  bug: {
    background: colors.deep_olive_green_10, // Deep Olive Green
    text: colors.deep_olive_green, // Deep Olive Green
  },
  dark: {
    background: colors.black_10, // Black
    text: colors.black, // Black
  },
  dragon: {
    background: colors.deep_purple_10, // Deep Purple
    text: colors.deep_purple, // Deep Purple
  },
  electric: {
    background: colors.bold_yellow_orange_10, // Bold Yellow-Orange
    text: colors.bold_yellow_orange, // Bold Yellow-Orange
  },
  fairy: {
    background: colors.strong_magenta_10, // Strong Magenta
    text: colors.strong_magenta, // Strong Magenta
  },
  fighting: {
    background: colors.bold_red_10, // Bold Red
    text: colors.bold_red, // Bold Red
  },
  flying: {
    background: colors.strong_sky_blue_10, // Strong Sky Blue
    text: colors.strong_sky_blue, // Strong Sky Blue
  },
  ghost: {
    background: colors.deep_violet_10, // Deep Violet
    text: colors.deep_violet, // Deep Violet
  },
  ground: {
    background: colors.bold_brown_10, // Bold Brown
    text: colors.bold_brown, // Bold Brown
  },
  ice: {
    background: colors.strong_teal_10, // Strong Teal
    text: colors.strong_teal, // Strong Teal
  },
  normal: {
    background: colors.charcoal_black_10, // Charcoal Black
    text: colors.charcoal_black, // Charcoal Black
  },
  poison: {
    background: colors.deep_purple_variant_10, // Deep Purple
    text: colors.deep_purple_variant, // Deep Purple
  },
  psychic: {
    background: colors.bold_burnt_orange_10, // Bold Burnt Orange
    text: colors.bold_burnt_orange, // Bold Burnt Orange
  },
  rock: {
    background: colors.dark_brown_10, // Dark Brown
    text: colors.dark_brown, // Dark Brown
  },
  steel: {
    background: colors.deep_slate_10, // Deep Slate
    text: colors.deep_slate, // Deep Slate
  },
};

function getTagFromType(type: PokemonType): TypeColor {
  return tagMap[type];
}

type TypeCardColor = {
  firstColor: string;
  secondColor: string;
};

//Card type
const typeCardColorMap: Record<PokemonType, TypeCardColor> = {
  fire: {
    firstColor: '#FFEBCA', // FireStrong Red-Orange
    secondColor: '#E96303', // Strong Red-Orange-Orange
  },
  grass: {
    firstColor: '#D6EBDC', // GrassBold Forest Green
    secondColor: '#68AE28', // Bold Forest Green Green
  },
  water: {
    firstColor: '#DFECF5', // WaterStrong Blue
    secondColor: '#2079FF', // Strong Blue
  },
  bug: {
    firstColor: '#D0E6A5', // BugDeep Olive Green
    secondColor: '#6A8E1C', // Deep Olive Green Green
  },
  dark: {
    firstColor: '#A9A9A9', // DarkBlack
    secondColor: '#000000', // Black
  },
  dragon: {
    firstColor: '#C5CAE9', // DragonDeep Purple
    secondColor: '#512DA8', // Deep Purple
  },
  electric: {
    firstColor: '#FFF9C4', // ElectricBold Yellow-Orange
    secondColor: '#F2CE0E', // Bold Yellow-Orange-Orange
  },
  fairy: {
    firstColor: '#FCE4EC', // FairyStrong Magenta
    secondColor: '#C2185B', // Strong Magenta
  },
  fighting: {
    firstColor: '#FFCDD2', // FightingBold Red
    secondColor: '#C62828', // Bold Red
  },
  flying: {
    firstColor: '#BBDEFB', // FlyingStrong Sky Blue
    secondColor: '#8C9089', // Strong Sky Blue Blue
  },
  ghost: {
    firstColor: '#CE93D8', // GhostDeep Violet
    secondColor: '#4527A0', // Deep Violet
  },
  ground: {
    firstColor: '#EFEBE9', // GroundBold Brown
    secondColor: '#D35005', // Bold Brown
  },
  ice: {
    firstColor: '#E0F7FA', // IceStrong Teal
    secondColor: '#58B7ED', // Strong Teal
  },
  normal: {
    firstColor: '#F5F5F5', // NormalCharcoal Black
    secondColor: '#212121', // Charcoal Black
  },
  poison: {
    firstColor: '#E1BEE7', // PoisonDeep Purple
    secondColor: '#A234F9', // Deep Purple
  },
  psychic: {
    firstColor: '#FFCCBC', // PsychicBold Burnt Orange
    secondColor: '#F02F8C', // Bold Burnt Orange Orange
  },
  rock: {
    firstColor: '#D7CCC8', // RockDark Brown
    secondColor: '#E5A23D', // Dark Brown
  },
  steel: {
    firstColor: '#CFD8DC', // SteelDeep Slate
    secondColor: '#37474F', // Deep Slate
  },
};

function getCardFromType(type: PokemonType): TypeCardColor {
  return typeCardColorMap[type];
}

function formatNameToShow(name: string) {
  const formattedName = name.replace(/-/g, ' ');

  return formattedName;
}

function formatNameToSearch(name: string) {
  const formattedName = name.replace(/''/g, '-');

  return formattedName;
}

export {
  getTagFromType,
  getIconFromType,
  PokemonType,
  getCardFromType,
  formatNameToShow,
  formatNameToSearch,
};
