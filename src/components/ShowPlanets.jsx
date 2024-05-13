function ShowPlanets({planets}) {
    return(
        <>
        <ul>
            {planets.map((x,i)=>{
                return <li key={i}>{x}</li>
            })}
        </ul>
        
        </>
    )
}
export default ShowPlanets