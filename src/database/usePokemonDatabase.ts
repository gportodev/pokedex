import { useSQLiteContext } from 'expo-sqlite';

export type PokemonDatabase = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string;
  sprites: string;
  stats: string;
  abilities: string;
  moves: string;
  avatar: string;
  species: string;
  past_types: string;
  pokemon_order: number;
  location_area_encounters: string;
  is_default: number;
  held_items: string;
  game_indices: string;
  forms: string;
  cries: string;
  base_experience: number;
  weaknesses: string;
};

export function usePokemonDatabase() {
  const database = useSQLiteContext();

  async function create(data: PokemonDatabase) {
    const {
      id,
      name,
      height,
      weight,
      types,
      sprites,
      stats,
      abilities,
      moves,
      avatar,
      species,
      past_types,
      pokemon_order,
      location_area_encounters,
      is_default,
      held_items,
      game_indices,
      forms,
      cries,
      base_experience,
      weaknesses,
    } = data;

    const statement = await database.prepareAsync(`
      INSERT INTO pokemons (
      id,
      name,
      height,
      weight,
      types,
      sprites,
      stats,
      abilities,
      moves,
      avatar,
      species,
      past_types,
      pokemon_order,
      location_area_encounters,
      is_default,
      held_items,
      game_indices,
      forms,
      cries,
      base_experience,
      weaknesses)
      VALUES (
      $id,
      $name,
      $height,
      $weight,
      $types,
      $sprites,
      $stats,
      $abilities,
      $moves,
      $avatar,
      $species,
      $past_types,
      $pokemon_order,
      $location_area_encounters,
      $is_default,
      $held_items,
      $game_indices,
      $forms,
      $cries,
      $base_experience,
      $weaknesses)
    `);

    try {
      await statement.executeAsync({
        $id: id,
        $name: name,
        $height: height,
        $weight: weight,
        $types: types,
        $sprites: sprites,
        $stats: stats,
        $abilities: abilities,
        $moves: moves,
        $avatar: avatar,
        $species: species,
        $past_types: past_types,
        $pokemon_order: pokemon_order,
        $location_area_encounters: location_area_encounters,
        $is_default: is_default,
        $held_items: held_items,
        $game_indices: game_indices,
        $forms: forms,
        $cries: cries,
        $base_experience: base_experience,
        $weaknesses: weaknesses,
      });
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function searchAll() {
    try {
      const query = 'SELECT * FROM pokemons';

      const response = await database.getAllAsync<PokemonDatabase>(query);

      return response;
    } catch (error) {
      throw error;
    }
  }

  return { create, searchAll };
}
