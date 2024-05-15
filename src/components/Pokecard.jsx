import Pokedex from "./Pokedex"
function Pokecard({image,type,name}) {
 
  return(
    <div>
        <h2>{name}</h2>
              <div>
                <img src={image} alt="" />
              </div>
              <h3>{type}</h3>
              

    </div>
    )
}
export default Pokecard