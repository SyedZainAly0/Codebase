function Firstcomponent(){
    return(
        <>
        <p>----------------------------------------------------------------------</p>
        <div>Hello This is First component</div>

        </>
    )
}


function Secondcomponent(){
    return(
    <>
        <Firstcomponent/>
        <h4>Click</h4>
    </>
    )
}

function ThirdComponent(){
    return(
        <>
        <Secondcomponent/>
        <h3>Thanks for Visiting</h3>
        <button>Click</button>
        </>
    )
}

function Maincomponent(){
    return(
        <>
        <ThirdComponent/>
        <h2>Logout-</h2>
        </>
    )
}

export default Maincomponent