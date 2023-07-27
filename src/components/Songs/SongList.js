import React from "react";
import classes from "./SongList.module.css";
const SongList = (props) => {
  let content=<h3 className={classes.heading}>No songs available!</h3>
  if(props.songList.length>0){
    content = props.songList.map((item) => {
      return (
        <tr key={item.key} className={classes.tr}>
          <td><img className={classes.image} src={item.img} alt="album"/></td>
          <td>{item.songName}</td>
          <td>{item.releasedDate}</td>
          <td>{item.artist}</td>
          <td>{item.rating}</td>
        </tr>
      )
    })
  }
  let songList=content;

  if(props.onError){
    songList=<button className={classes.button} onClick={props.onFetch}>Try Again</button>
  }

  if(props.onLoading){
    songList=<h3 className={classes.heading}>Loading Songs...</h3>
  }

  return (
    <React.Fragment>
      <table className={`${classes.table}`}>
        <div className={classes.sticky}>
          <thead>
            <tr className={`${classes.thead}`}>
              <th>ArtWork</th>
              <th>Song</th>
              <th>Date of Release</th>
              <th>Artists</th>
              <th>Rate</th>
            </tr>
          </thead>
        </div>
          <tbody>{songList}</tbody>
      </table>
    </React.Fragment>
  );
};
export default SongList;
