import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faPauseCircle,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './musicPlayer.module.scss';
import { convertNumberToTime } from '../../util/time';

const MusicPlayer = ({
  isPlaying,
  setIsPlaying,
  musicInfo,
  setMusicInfo,
  audioElm,
  musics,
  activeMusic,
  newProp = 'init',
  setActiveMusic,
}) => {
  console.log(newProp);
  const togglePlaying = () => {
    if (!isPlaying) audioElm.current.play();
    else audioElm.current.pause();
    setIsPlaying(currIsPlay => !currIsPlay);
  };
  const changeHandler = e => {
    const currentTime = e.target.value;
    setMusicInfo({ ...musicInfo, currentTime });
    audioElm.current.currentTime = currentTime;
  };
  const changeSong = async dir => {
    setMusicInfo({ ...musicInfo, trackPercentage: 0 });
    const currIndex = musics.findIndex(music => music._id === activeMusic._id);
    switch (dir) {
      case 'prev':
        await setActiveMusic(
          musics[currIndex - 1 >= 0 ? currIndex - 1 : musics.length - 1]
        );
        break;
      case 'next':
        await setActiveMusic(musics[(currIndex + 1) % musics.length]);
        break;
      default:
        return;
    }
    if (isPlaying) audioElm.current.play();
    else audioElm.current.pause();
  };
  const audioTrackStyle = {
    backgroundImage: `linear-gradient(to right,${
      activeMusic && activeMusic.colors[0]
    } 0%,${activeMusic && activeMusic.colors[1]}100%)`,
    transform: `scaleX(${musicInfo.trackPercentage})`,
  };
  return (
    <div className={styles.container}>
      <div className={styles.ranger}>
        <p className={styles.time}>
          {convertNumberToTime(musicInfo.currentTime)}
        </p>
        <div className={styles.rangerContainer}>
          <input
            type='range'
            min={0}
            max={musicInfo.duration || 0}
            value={musicInfo.currentTime}
            onChange={e => changeHandler(e)}
          />
          <div className={styles.track} style={audioTrackStyle} />
        </div>

        <p className={styles.time}>
          {convertNumberToTime(musicInfo.duration || 0)}
        </p>
      </div>
      <div className={styles.player}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size='3x'
          className={styles.icon}
          onClick={() => changeSong('prev')}
        />
        <FontAwesomeIcon
          icon={!isPlaying ? faPlayCircle : faPauseCircle}
          size='6x'
          color='crimson'
          className={styles.icon}
          onClick={() => togglePlaying()}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          size='3x'
          className={styles.icon}
          onClick={() => changeSong('next')}
        />
      </div>
    </div>
  );
};
MusicPlayer.defaultProps = {
  audioElm: {},
  musics: [],
  activeMusic: {},
  newProp: 'default',
};
MusicPlayer.propTypes = {
  audioElm: PropTypes.object,
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  musicInfo: PropTypes.object.isRequired,
  setMusicInfo: PropTypes.func.isRequired,
  musics: PropTypes.array,
  activeMusic: PropTypes.object,
  setActiveMusic: PropTypes.func.isRequired,
};
export default MusicPlayer;
