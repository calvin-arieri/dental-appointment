import './App.css'
import Booking from './components/appointment'
import Blogs from './components/blog'
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Booking   />
      <Blogs  date="2"  time="7.40"  doctor="Calvin"/>
      <Footer />
    </div>
  );
}


export default App;
