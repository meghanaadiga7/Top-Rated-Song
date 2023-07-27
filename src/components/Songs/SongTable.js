import React from "react";
import classes from "./SongTable.module.css";
import SongList from "./SongList";
const SongTable = (props) => {
  return (
    <React.Fragment>
      <div className={classes.songHead}>
        <h3 className={classes.head}>Top 10 songs</h3>
        <button onClick={props.onAddSong} className={classes.button}>
          + Add Song
        </button>
      </div>
      <div>
      <SongList onError={props.onError} onFetch={props.onFetch} onLoading={props.onLoading} songList={props.songList}></SongList>
      </div>
    </React.Fragment>
  );
};
export default SongTable;
