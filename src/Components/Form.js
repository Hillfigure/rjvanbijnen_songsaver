import React from "react";

class Form extends React.Component {
  state={songTitle: '', songArtist: '', songGenre: '', songRating: ''};
  
    handleSubmit = (event) => {
      event.preventDefault();
      const resp = { 
        title: this.state.songTitle, 
        artist: this.state.songArtist, 
        genre: this.state.songGenre, 
        rating: this.state.songRating 
      }
      this.props.onSubmit(resp);
      this.setState({ 
        songTitle: '', 
        songArtist: '', 
        songGenre: '', 
        songRating: '' 
      });
    }
  
    render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type={"text"} 
            placeholder={"Title"}
            type="text"
            value={this.state.songTitle}
            onChange={event => this.setState({ songTitle: event.target.value })}
            required    
          />
          <input 
            type={"text"} 
            placeholder={"Artist"}
            value={this.state.songArtist}
            onChange={event => this.setState({ songArtist: event.target.value })}
            required
          />
          <label>Genre:</label>
          <select    
            id="genre" 
            name="genre" 
            onChange={event => this.setState({ songGenre: event.target.value })}
            required
          >
            <option value="">please select</option>
            <option value="Jazz">Jazz</option>
            <option value="Classical">Classical</option>
            <option value="Pop">Pop</option>
            <option value="Folk">Folk</option>
            <option value="Lecture">Lecture</option>
          </select>
          <label>Rating:</label>
          <select 
            required
            id="rating" 
            name="rating"
            onChange={event => this.setState({ songRating: event.target.value })}
          >
            <option value="">please select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>       
          <button>Add</button>
        </form>
      )
    }
  }

  export default Form;