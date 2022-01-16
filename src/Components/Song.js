import React from "react";

class Song extends React.Component {

  handleDelete = () => {
    this.props.removeSong(this.props.song.title)
  }

    render(){
      return(
      <tr>
        <td>{this.props.song.title}</td>
        <td>{this.props.song.artist}</td>
        <td>{this.props.song.genre}</td>
        <td>{this.props.song.rating}</td>
        <td><button onClick={this.handleDelete}>Delete</button></td>
      </tr>
      )
    }
  }

  export default Song;
