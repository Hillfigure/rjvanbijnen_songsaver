import React, {useState} from "react";
import Song from './Song';

const useSortableData = (allSongs, filterGenre, songRating) => {
  const [sortConfig, setSortConfig] = React.useState(null);

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

  return { allSongs: sortedItems, requestSort };
}

function List(props) {
  const [ filterGenre, setFilterGenre] = useState(null)
  const [ songRating, setSongRating ] = useState(null)
  const { allSongs, requestSort, sortConfig } = useSortableData(props.songs, filterGenre, songRating);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

      return(
        <div>
          <table style={{width: "100%"}}>
            <thead>
              <tr className="song-header">  
                <th 
                  className="song-row__item" 
                  onClick={() => requestSort('title')}
                  className={getClassNamesFor('title')}
                  >Title
                </th>
                <th 
                  className="song-row__item" 
                  onClick={() => requestSort('artist')}
                  className={getClassNamesFor('artist')}
                  >Artist
                </th>
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
              </tr>
            </thead>
            <tbody>
            {allSongs.map(song => 
              <Song song={song} removeSong={props.removeSong} genre={filterGenre}/>)}
            </tbody>
          </table>
        </div>
      )

  }

  export default List;