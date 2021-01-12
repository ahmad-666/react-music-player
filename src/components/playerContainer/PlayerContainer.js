import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Player from '../player/Player';
import Sidenav from '../sidenav/Sidenav';
import Nav from '../nav/Nav';

const PlayerContainer = () => {
  const [musics, setMusics] = useState([]);
  const [activeMusic, setActiveMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicInfo, setMusicInfo] = useState({
    currentTime: 0,
    duration: 0,
    trackPercentage: 0,
  });
  const [isNavOpen, setIsNavOpen] = useState(true);
  const audioElm = useRef(null);
  useEffect(() => {
    const fetchMusics = async () => {
      const musicsList = await axios.get('/data/musics.json');
      setMusics(musicsList.data);
      setActiveMusic(musicsList.data[0]);
    };
    fetchMusics();
  }, []);
  const updateMusicInfo = e => {
    const { currentTime } = e.target;
    const { duration } = e.target;
    const trackPercentage = currentTime / duration;
    setMusicInfo({ ...musicInfo, currentTime, duration, trackPercentage });
  };
  const endMusicHandler = async () => {
    const currIndex = musics.findIndex(music => music._id === activeMusic._id);
    await setActiveMusic(musics[(currIndex + 1) % musics.length]);
    if (isPlaying) audioElm.current.play();
    else audioElm.current.pause();
  };
  return (
    <>
      <Nav setIsNavOpen={setIsNavOpen} />
      <Player
        music={activeMusic}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        musicInfo={musicInfo}
        setMusicInfo={setMusicInfo}
        audioElm={audioElm}
        activeMusic={activeMusic}
        setActiveMusic={setActiveMusic}
        musics={musics}
      />
      <Sidenav
        musics={musics}
        activeMusic={activeMusic}
        setActiveMusic={setActiveMusic}
        audioElm={audioElm}
        isPlaying={isPlaying}
        isNavOpen={isNavOpen}
      />
      <audio
        src={activeMusic && activeMusic.audio}
        ref={audioElm}
        style={{ display: 'none' }}
        onTimeUpdate={e => updateMusicInfo(e)}
        onLoadedMetadata={e => updateMusicInfo(e)}
        onEnded={() => endMusicHandler()}
      />
    </>
  );
};

export default PlayerContainer;
