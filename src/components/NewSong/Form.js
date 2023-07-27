import React, { useState, useRef } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  let songName = useRef();
  let releasedDate = useRef("");
  let artWork = useRef("");
  let artist = useRef("");
  let rating=useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newSong = {
      songName: songName.current.value,
      releasedDate: releasedDate.current.value,
      img: artWork.current.value,
      artist: artist.current.value,
      rating:rating.current.value
    };
    props.onSubmit(newSong);
    event.target.reset();
  };

  return (
    <React.Fragment>
        <form onSubmit={submitHandler} className={classes.form}>
          <label>Song Name</label>
          <input required ref={songName} type="text"></input>
          <label>Released Date</label>
          <input
            required
            ref={releasedDate}
            type="date"
            min="2000-01-01"
            max="2023-12-01"
          ></input>
          <label>ArtWork(Image url)</label>
          <input
            required
            autoComplete="off"
            ref={artWork}
            type="text"
            accept="image/*"
            name="Upload image"
          ></input>
          <label>Rating(1-10)</label>
          <input required ref={rating} type="number" min="1" max="10"></input>
          <label>Artists</label>
          <input required ref={artist} type="text"></input>
          <div className={classes.actions}>
            <button type="button" onClick={props.onCancel} className={classes.button}>
              Cancel
            </button>
            <button type="submit" className={classes.button}>
              Save
            </button>
          </div>
        </form>
    </React.Fragment>
  );
};
export default Form;
