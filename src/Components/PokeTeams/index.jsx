import PropTypes from "prop-types";
import Buttons from "../Buttons";
import style from "./team.module.css";
import Swal from "sweetalert2";

function PokeTeam({ team, setTeam }) {
  const increasePokemonCount = (id) => {
    setTeam((prevTeam) =>
      prevTeam.map((poke) =>
        poke.id === id ? { ...poke, count: (poke.count || 1)  + 1 } : poke
      )
    );
  };

  const decreasePokemonCount = (id) => {
    setTeam((prevTeam) => {
      return prevTeam
        .map((poke) =>
          poke.id === id ? { ...poke, count: poke.count - 1 } : poke
        )
        .filter((poke) => poke.count > 0);
    });
  };

  const removePokemon = (id) => {
    setTeam((prevTeam) => prevTeam.filter((poke) => poke.id !== id));

    Swal.fire({
      title: "Success!",
      text: "Deleted successfully!",
      icon: "success",
      confirmButtonText: "Okay!",
    });
  };

  return (
    <div className={style.main_div}>
      {team.map((poke) => {
        const pokeId = poke.id.toString().padStart(3, "0");
        return (
          <div className={style.team_div} key={poke.id}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeId}.png`}
                alt={poke.name}
                style={{ width: "60px", height: "60px", marginRight: "10px" }}
              />
              <h4>{poke.name}</h4>
            </div>

            <Buttons
              count={poke.count ||1 }
              onIncrease={() => increasePokemonCount(poke.id)}
              onDecrease={() => decreasePokemonCount(poke.id)}
              onRemove={() => removePokemon(poke.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

PokeTeam.propTypes = {
  team: PropTypes.array.isRequired,
  setTeam: PropTypes.func.isRequired,
};

export default PokeTeam;
