import React from 'react'
import './App.css';
import List from './Components/List';
import Form from './Components/Form';

class App extends React.Component {

  constructor() {
    super()
    this.state = 
    {
      songs: [
        { title: "Aria", artist: "J.S. Bach", genre: "Classical", rating: 3 },
        { title: "Song for Song", artist: "Kenny Garrett", genre: "Jazz", rating: 5 },
        { title: "The State", artist: "Plato", genre: "Lecture", rating: 4 },
        { title: "Crash Dance", artist: "Celtic Bullies", genre: "Folk", rating: 2 },
        { title: "Paris", artist: "Ben l'Oncle Soul", genre: "Jazz", rating: 4 },
        { title: "Like a Virgin", artist: "Madonna", genre: "Pop", rating: 5 },
        { title: "Mmm Mmm Mmm Mmm", artist: "Crash Test Dummies", genre: "Pop", rating: 1 }
      ]
    }
  }

  addNewSong = (songData) => {
    this.setState(prevState => ({
      songs: [...prevState.songs, songData]
    }))
  }

  removeSong = (songTitle) => {
    const updatedSongs = this.state.songs.filter(song => song.title !== songTitle);
    this.setState({songs: updatedSongs})
  }

  render(){ 
    return (
      <div className="App">
        <Form onSubmit={this.addNewSong}/>
        <List songs={this.state.songs} removeSong={this.removeSong}/>
      </div>
    )
  }
}

export default App