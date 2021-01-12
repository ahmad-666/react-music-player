import React from 'react';
import PropTypes from 'prop-types';
import MusicInfo from '../musicInfo/MusicInfo';
import MusicPlayer from '../musicPlayer/MusicPlayer';
import styles from './player.module.scss';

const Player = ({
  music,
  isPlaying,
  setIsPlaying,
  musicInfo,
  setMusicInfo,
  audioElm,
  activeMusic,
  setActiveMusic,
  musics,
}) => (
  <div className={styles.player}>
    <MusicInfo {...music} />
    <MusicPlayer
      audioSrc={music && music.audio}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      musicInfo={musicInfo}
      setMusicInfo={setMusicInfo}
      audioElm={audioElm}
      activeMusic={activeMusic}
      setActiveMusic={setActiveMusic}
      musics={musics}
    />
  </div>
);
Player.defaultProps = {
  music: {},
  audioElm: {},
  activeMusic: {},
  musics: [],
};
Player.propTypes = {
  music: PropTypes.object,
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  musicInfo: PropTypes.object.isRequired,
  setMusicInfo: PropTypes.func.isRequired,
  audioElm: PropTypes.object,
  activeMusic: PropTypes.object,
  setActiveMusic: PropTypes.func.isRequired,
  musics: PropTypes.array,
};
export default Player;
