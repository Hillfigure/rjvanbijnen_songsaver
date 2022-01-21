import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Song extends React.Component {

  handleDelete = () => {
    this.props.removeSong(this.props.song.title)
  }

    render(){
      return(
      <tr className="list-row">
        <td>{this.props.song.title}</td>
        <td>{this.props.song.artist}</td>
        <td>{this.props.song.genre}</td>
        <td>{this.props.song.rating}</td>
        <td className="delete-button"><FontAwesomeIcon icon={faTrashAlt} onClick={this.handleDelete} /></td>
      </tr>
      )
    }
  }

  export default Song;
