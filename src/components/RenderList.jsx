function RenderList({animals}) {
    return (
        <>
        <ul>
            {animals.map((x,index)=>{
             return <li key={index}>{x.lable}</li>
            })}
        </ul>
        
        </>
    )
}
export default RenderList