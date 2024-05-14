import Pokecard from "./Pokecard";
const pokemon = [
    {
      id: 1,
      name: 'Charmander',
      type: 'fire',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      id: 2,
      name: 'Squirtle',
      type: 'water',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      id: 3,
      name: 'Butterfree',
      type: 'flying',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
    {
      id: 4,
      name: 'Rattata',
      type: 'normal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    },
    {
      id: 5,
      name: 'Metapod',
      type: 'bug',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
  ];
  const box ={
    border: solid,
    borderColor : "red"
  }
function Pokedex(data) {

    return(
           pokemon.map((x,i)=>{
          return  <div key={i}>
              <Pokecard image={x.image} name={x.name} type={x.type} />
            </div>
        })
    )
        
}
export default Pokedex