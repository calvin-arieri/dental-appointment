const Booking =() =>{
    return <div>  
        <nav >
            <a href="www.youtube.com">Home</a>
            <a href="www.moringaschool.com">About</a>
            <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">Footer</a>
            <a href="props.com">Add appointment</a>
            <EmojiButton emoji="👤" labelText="Login" />
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