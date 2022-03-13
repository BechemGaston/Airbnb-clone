import './App.css';
import Navbar from './components/navbar';
import MainPic from './components/hero';
import NewCard from './newCard';
import notes from './notes';


function App() {
  const completed = notes.map((note)=>{
    return(
      <NewCard 
        key = {note.id}
        title = {note.title}
        content = {note.content}
        pic = {note.pic}
        rating = {note.rating}
        review = {note.review}
        location = {note.location}
        price = {note.price}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <MainPic />
        <section className="card-list" >
           {completed}
        </section>
      

      

    
    </div>
  );
}

export default App;
