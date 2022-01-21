import React, {useState} from "react";
import Song from './Song';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

// Custom Hook

const useSortableList = (allSongs, filterGenre, songRating) => {
  const [sortConfig, setSortConfig] = React.useState('');

  const updatedByGenre = allSongs.filter(song => {
    if(filterGenre) {
      return song.genre === filterGenre
    } else {
      return { updatedByGenre: allSongs };
    }});

  const updatedSongs = updatedByGenre.filter(song => {
    if(songRating) {
      return song.rating === parseInt(songRating)
    } else {
      return { updatedSongs: allSongs };
    }});

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...updatedSongs];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [updatedSongs, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }
  return { allSongs: sortedItems, requestSort, sortConfig };
}

function List(props) {
  const [ filterGenre, setFilterGenre] = useState('')
  const [ songRating, setSongRating ] = useState('')
  const { allSongs, requestSort, sortConfig } = useSortableList(props.songs, filterGenre, songRating);

  const getIcon = (name) => {
    if (!sortConfig) {
      return;
    }
    const arrow = (direc) => {
      return direc === "ascending" ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />
    }
    return sortConfig.key === name ? arrow(sortConfig.direction) : undefined;
  };

      return(
        <main className={'main-content'}>
          <table style={{width: "100%"}}>
            <thead>
              <tr className="list-row">  
                <th 
                  onClick={() => requestSort('title')}

                  >Title {getIcon('title')}
                </th>
                <th 
                  onClick={() => requestSort('artist')}
                  >Artist {getIcon('artist')}
                </th>
                <th>
                  <select
                  className="song-row__item" 
                  onChange={event => setFilterGenre(event.target.value)}
                >
                  <option value="">All Genres</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Classical">Classical</option>
                  <option value="Pop">Pop</option>
                  <option value="Folk">Folk</option>
                  <option value="Lecture">Lecture</option>
                  </select>
                </th>
                <th>
                  <select 
                  className="song-row__item" 
                  onChange={event => setSongRating(event.target.value)}
                >
                  <option value="">All Ratings</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  </select> 
                  </th>
              </tr>
            </thead>
            <tbody>
            {allSongs.map(song => 
              <Song song={song} removeSong={props.removeSong} genre={filterGenre}/>)}
            </tbody>
          </table>
        </main>
      )

  }

  export default List;