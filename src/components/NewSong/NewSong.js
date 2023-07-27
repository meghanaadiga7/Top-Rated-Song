import React from "react";
import Card from "../../UI/Card/Card";
import Form from "./Form";
import "./NewSong.module.css";

const NewSong = (props) => {
  const submitBackend=async(submitData)=>{
    const response= await fetch("https://music-list-1cdd8-default-rtdb.firebaseio.com/songs.json",{
      method:"POST",
      body:JSON.stringify({songData:submitData}),
      headers:{
        "Content-Type":"application/json",
      }
    })
    const data=await response.json();
    const createSong={key:data.name,...submitData};
    props.songAdd(createSong);
  }


  return (
    <React.Fragment>
      <div>
        <h2>Adding a New Song</h2>
        <Card>
          <Form onSubmit={submitBackend} onCancel={props.onCancel}></Form>
        </Card>
      </div>
    </React.Fragment>
  );
};
export default NewSong;
