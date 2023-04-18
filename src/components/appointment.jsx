const Booking =() =>{
    return <div>

    <nav>
        <a href="www.youtube.com">home</a>
        <a href="www.moringaschool.com">About</a>
        <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">footer</a>
        <a href="props.com" onClick={function(){
            prompt("enter your name:")
            prompt("enter date")
        }}>add appointment</a>
        
    </nav>
    </div>

function EmojiButton(props) {
    console.log(props)
    return (
      <button>
        <span role="img">{props.emoji}</span>
        {props.labelText}
      </button>
    )
  }
}

export default Booking;