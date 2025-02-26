import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./cards.module.css";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

function PokeCards({ data, team, setTeam }) {
  const addToTeam = (poke) => {
    if (team.some((p) => p.id === poke.id)) {
      Swal.fire({
        title: "Oops!",
        text: `${poke.name} is already in your team!`,
        icon: "warning",
        confirmButtonText: "Okay!",
      });
    } else {
      setTeam([...team, poke]);

      Swal.fire({
        title: "Success!",
        text: `${poke.name} added to your team!`,
        icon: "success",
        confirmButtonText: "Cool!",
      });
    }
  };

  return (
    <div className={style.main_div}>
      {data.map((poke, index) => {
        const pokeId = poke.id.toString().padStart(3, "0");

        return (
          <Card className={style.cards} key={index}>
            <Card.Img
              variant="top"
              style={{ width: "60px", height: "50px", margin: "0 auto" }}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeId}.png`}
            />
            <Card.Body>
              <Card.Title>{poke.name}</Card.Title>
              <Button variant="outline-danger" onClick={() => addToTeam(poke)}>
                Add to Team
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

PokeCards.propTypes = {
  data: PropTypes.array.isRequired,
  team: PropTypes.array.isRequired,
  setTeam: PropTypes.func.isRequired,
};

export default PokeCards;
