export function Properties({Props}){
    return(
        <>
        <h1>Hello from {Props.name}</h1>
        <h2>This is {Props.course} course</h2>
        </>
    )
}

function Propsdestructuring({name,course,time,value}){
    return(
        <>
        <h3>Hello from {name}</h3>
        <h3>This is {course} Course</h3>
        <h3>Good {time}</h3>
        <h3>Your Amount is : {value}</h3>
        </>
    )
}

export default Propsdestructuring