function Childrenprop(props){
    return(
    <div style={{ border: "5px solid gold", padding: "10px" }}>
       <h3>This is Children Prop</h3>
        {props.children}
    </div>
    )
}

export default Childrenprop