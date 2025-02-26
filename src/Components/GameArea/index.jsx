import { useState } from "react";
import PokeCards from "../PokeCards";
import PokeTable from "../PokeTable";
import PokeTeam from "../PokeTeams";
import Title from "../Title";
import data from "../../Mock/data.json";

function Main() {
  const [team, setTeam] = useState([]);
console.log(team);

  const pokemonCounts = team.reduce((acc, poke) => {
    acc[poke.id] = (acc[poke.id] || 0) + poke.count;
    return acc;
  }, {});

  console.log(pokemonCounts);

  const totalPokemonCount = team.reduce(
    (acc, poke) => acc + (poke.count || 1),
    0
  );
  console.log(totalPokemonCount);

  return (
    <div>
      <PokeCards data={data} team={team} setTeam={setTeam} />

      {team.length === 0 ? (
        ""
      ) : (
        <div>
          <Title title="Your Pokemon Team" variant="title2" />
          <PokeTeam
            team={team}
            setTeam={setTeam}
            pokemonCounts={pokemonCounts}
          />
          <Title
            title={`Total Pokemon In Team: ${totalPokemonCount}`}
            variant="title3"
          />
          <PokeTable team={team} pokemonCounts={pokemonCounts} />
        </div>
      )}
    </div>
  );
}

export default Main;
