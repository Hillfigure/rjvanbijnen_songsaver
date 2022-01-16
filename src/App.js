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
        { title: "Test3", artist: "me3", genre: "Jazz", rating: 3 },
        { title: "Test2", artist: "me2", genre: "Folk", rating: 2 },
        { title: "Test1", artist: "me1", genre: "Lecture", rating: 1 }
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
        <List allSongs={this.state.songs} removeSong={this.removeSong}/>
      </div>
    )
  }
}

export default App