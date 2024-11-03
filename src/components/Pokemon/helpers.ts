import theme from '@/style/theme';

const getPokemonTypeColor = (type: string) => {
  switch (type) {
    case 'grass':
      return theme.greens.bold;

    case 'water':
      return theme.blues.bold;

    case 'fire':
      return theme.reds.bold;

    default:
      return theme.white;
  }
};

export { getPokemonTypeColor };
