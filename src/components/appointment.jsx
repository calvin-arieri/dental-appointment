const Booking =(props) =>{
    return <div>

    <nav>
        <a href="www.youtube.com">home</a>
        <a href="www.moringaschool.com">About</a>
        <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">footer</a>
        <a href="props.com" onClick={function(){
            const name = prompt("enter your name:")
            const date = prompt("enter date")
            
        }}>add appointment ${props.User}</a>
       
        </nav>
    </div>

}



export default Booking;