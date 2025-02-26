import PropTypes from "prop-types";
import Title from "../Title";
import Table from "react-bootstrap/Table";

function PokeTable({ team, pokemonCounts }) {
  return (
    <div>
      <Title title="Individual Pokemon Count" variant="title4" />
      {team.length === 0 ? (
        ""
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          border={1}
          style={{
            margin: "0 auto",
            backgroundColor: "#fff",
            color: "#000",
            textAlign: "center !important",
            borderCollapse: "collapse",
            width: "60%",
          }}
        >
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Count</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            {team.map((poke) => {
              const pokeId = poke.id.toString().padStart(3, "0");
              return (
                <tr key={poke.id}>
                  <td>
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeId}.png`}
                      alt={poke.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{poke.name}</td>
                  <td>{pokemonCounts[poke.id] || 1}</td>
                  <td>Pokemon</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}

PokeTable.propTypes = {
  team: PropTypes.array.isRequired,
  pokemonCounts: PropTypes.object.isRequired,
};

export default PokeTable;
