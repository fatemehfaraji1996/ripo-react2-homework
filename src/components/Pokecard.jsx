import Pokedex from "./Pokedex"
function Pokecard({data}) {
    return(
<div>
        <h2>{data.name}</h2>
              <div>
                <img src={data.image} alt="" />
              </div>
              <h3>{data.type}</h3>
              

    </div>
    )
}
export default Pokecard