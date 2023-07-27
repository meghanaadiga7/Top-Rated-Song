import React, { useEffect, useState,useMemo } from "react";
import Header from "./components/Header/Header";
import SongTable from "./components/Songs/SongTable";
import "./index.css";
import NewSong from "./components/NewSong/NewSong";
function App() {
  const [addSong, setAddSong] = useState(false);
  const [screen, setScreen] = useState(true);
  const [songs,setSongs]=useState([]);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  
  const onAddSongHandler = () => {
    setAddSong(true);
    setScreen(false);
  };

  const onCancelSongHandler = () => {
    setAddSong(false);
    setScreen(true);
  };

  const fetchHandler=async()=>{
    setLoading(true);
    setError(null);
    try{
    const response=await fetch("https://music-list-1cdd8-default-rtdb.firebaseio.com/songs.json");
    if(!response.ok){
      throw new Error("Something went wrong!");
    }
    const data=await response.json();
    const loadedSongs=[];
    for(const songKey in data){
      loadedSongs.push({
        key:songKey,
        img:data[songKey].songData.img,
        artist:data[songKey].songData.artist,
        rating:data[songKey].songData.rating,
        releasedDate:data[songKey].songData.releasedDate,
        songName:data[songKey].songData.songName
      })
    }
    const sortedSongs=loadedSongs.sort((a,b)=>b.rating-a.rating).slice(0,10);
    setSongs(sortedSongs);
    }catch(err){
      setError(err.message);
    }
    setLoading(false);
  }

  const addSongs=(song)=>{
    setSongs(prevSong=>{
      const sorted=[...prevSong,song].sort((a,b)=>b.rating-a.rating).slice(0,10);
      return sorted;
    });
  }

  useEffect(()=>{
    fetchHandler();
  },[]);


  return (
    <React.Fragment>
      <Header></Header>
      {addSong && <NewSong  songAdd={addSongs} onCancel={onCancelSongHandler}></NewSong>}
      {screen && (
        <div>
          <SongTable
            songList={songs}
            onAddSong={onAddSongHandler}
            onLoading={loading}
            onError={error}
            onFetch={fetchHandler}
          ></SongTable>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;

