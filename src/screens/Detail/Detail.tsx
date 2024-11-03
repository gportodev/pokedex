import React, { useState, useEffect, useCallback } from 'react';

import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';

import api from '@/services/api';
import { Header } from './Header';
import { DetailProps } from '@/routes/types';
import { getTagFromType, PokemonType } from '@/common/utils/pokemon';
import { Stats } from './Stats';
import { Weaknesses } from './Weaknesses';
import { Characteristics } from './Characteristics';
import { Types } from './Types';

function Detail({ navigation, route }: DetailProps): JSX.Element {
  const { item } = route.params;

  const { id, name, height, types, weight, abilities, weaknesses, stats } =
    item;

  const [evolution, setEvolution] = useState([]);

  // async function loadEvolution() {
  //   const poke_specie = await api.get(`pokemon-species/${item.n}`);

  //   const poke_chain = poke_specie.data.evolution_chain;

  //   const tree = await api.get(`${poke_chain.url}`);

  //   const { chain } = tree.data;

  //   const { species, evolves_to } = chain;

  //   const e1 = species.name;

  //   if (evolves_to.length > 0) {
  //     const e2 = evolves_to[0].species.name;

  //     if (evolves_to[0].evolves_to.length > 0) {
  //       const e3 = chain.evolves_to[0].evolves_to[0].species.name;

  //       if (item.n === e1) {
  //         const res1 = await api.get(`pokemon/${e2}`);

  //         const res2 = await api.get(`pokemon/${e3}`);

  //         const evo1 = {
  //           i: String(res1.data.id),
  //           n: res1.data.name,
  //           t: res1.data.types,
  //           image: res1.data.sprites.other.dream_world.front_default,
  //           hp: res1.data.stats[0].base_stat,
  //           atk: res1.data.stats[1].base_stat,
  //           def: res1.data.stats[2].base_stat,
  //           spd: res1.data.stats[3].base_stat,
  //         };

  //         const evo2 = {
  //           i: String(res2.data.id),
  //           n: res2.data.name,
  //           t: res2.data.types,
  //           image: res2.data.sprites.other.dream_world.front_default,
  //           hp: res2.data.stats[0].base_stat,
  //           atk: res2.data.stats[1].base_stat,
  //           def: res2.data.stats[2].base_stat,
  //           spd: res2.data.stats[3].base_stat,
  //         };

  //         setEvolution([evo1, evo2]);
  //       }

  //       if (item.n === e2) {
  //         const res1 = await api.get(`pokemon/${e1}`);

  //         const res2 = await api.get(`pokemon/${e3}`);

  //         const evo1 = {
  //           i: String(res1.data.id),
  //           n: res1.data.name,
  //           t: res1.data.types,
  //           image: res1.data.sprites.other.dream_world.front_default,
  //           hp: res1.data.stats[0].base_stat,
  //           atk: res1.data.stats[1].base_stat,
  //           def: res1.data.stats[2].base_stat,
  //           spd: res1.data.stats[3].base_stat,
  //         };

  //         const evo2 = {
  //           i: String(res2.data.id),
  //           n: res2.data.name,
  //           t: res2.data.types,
  //           image: res2.data.sprites.other.dream_world.front_default,
  //           hp: res2.data.stats[0].base_stat,
  //           atk: res2.data.stats[1].base_stat,
  //           def: res2.data.stats[2].base_stat,
  //           spd: res2.data.stats[3].base_stat,
  //         };

  //         setEvolution([evo1, evo2]);
  //       }

  //       if (item.n === e3) {
  //         const res1 = await api.get(`pokemon/${e1}`);

  //         const res2 = await api.get(`pokemon/${e2}`);

  //         const evo1 = {
  //           i: String(res1.data.id),
  //           n: res1.data.name,
  //           t: res1.data.types,
  //           s: res1.data.sprites.other.dream_world.front_default,
  //           hp: res1.data.stats[0].base_stat,
  //           atk: res1.data.stats[1].base_stat,
  //           def: res1.data.stats[2].base_stat,
  //           spd: res1.data.stats[3].base_stat,
  //         };

  //         const evo2 = {
  //           i: String(res2.data.id),
  //           n: res2.data.name,
  //           t: res2.data.types,
  //           s: res2.data.sprites.other.dream_world.front_default,
  //           hp: res2.data.stats[0].base_stat,
  //           atk: res2.data.stats[1].base_stat,
  //           def: res2.data.stats[2].base_stat,
  //           spd: res2.data.stats[3].base_stat,
  //         };

  //         setEvolution([evo1, evo2]);
  //       }
  //     } else if (item.n === e1) {
  //       const res = await api.get(`pokemon/${e2}`);

  //       const evo = {
  //         i: String(res.data.id),
  //         n: res.data.name,
  //         t: res.data.types,
  //         s: res.data.sprites.other.dream_world.front_default,
  //         hp: res.data.stats[0].base_stat,
  //         atk: res.data.stats[1].base_stat,
  //         def: res.data.stats[2].base_stat,
  //         spd: res.data.stats[3].base_stat,
  //       };

  //       setEvolution([evo]);
  //     } else {
  //       const res = await api.get(`pokemon/${e1}`);

  //       const evo = {
  //         i: String(res.data.id),
  //         n: res.data.name,
  //         t: res.data.types,
  //         s: res.data.sprites.other.dream_world.front_default,
  //         hp: res.data.stats[0].base_stat,
  //         atk: res.data.stats[1].base_stat,
  //         def: res.data.stats[2].base_stat,
  //         spd: res.data.stats[3].base_stat,
  //       };

  //       setEvolution([evo]);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   loadEvolution();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header item={item} />

        <View style={styles.infoContainer}>
          <View style={styles.infoHeaderContainer}>
            <Text style={styles.infoHeaderName}>{item.name}</Text>

            <Text style={styles.infoHeaderId}>
              {'#00' + item.id.toString()}
            </Text>
          </View>

          <Types types={types} />

          <Characteristics
            height={item.height}
            weight={item.weight}
            abilities={item.abilities}
          />

          <Weaknesses weaknesses={item.weaknesses} />

          <Stats stats={item.stats} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export { Detail };
