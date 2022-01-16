import React from "react";
import Song from './Song';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
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
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return { items: sortedItems, requestSort };
}

function List(props) {
  const { items, requestSort, sortConfig } = useSortableData(props.allSongs);
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
                  className={getClassNamesFor('title')}>Title
                </th>
                <th 
                  className="song-row__item" 
                  onClick={() => requestSort('artist')}
                  className={getClassNamesFor('artist')}>Artist
                </th>
                <th 
                  className="song-row__item" 
                  onClick={() => requestSort('genre')}
                className={getClassNamesFor('genre')}>Genre
                </th>
                <th 
                  className="song-row__item" 
                  onClick={() => requestSort('rating')}
                  className={getClassNamesFor('rating')}>Rating
                </th>
              </tr>
            </thead>
            <tbody>
            {items.map(song => 
              <Song song={song} removeSong={props.removeSong}/>)}
            </tbody>
          </table>
        </div>
      )

  }

  export default List;