import React from 'react';
import PropTypes from 'prop-types';
import styles from './sidenavItem.module.scss';

const SidenavItem = ({
  music,
  setActiveMusic,
  audioElm,
  isPlaying,
  isActive,
}) => {
  const selectSong = async () => {
    await setActiveMusic(music);
    if (isPlaying) audioElm.current.play();
    else audioElm.current.pause();
  };
  return (
    <div
      className={`${styles.item} ${isActive && styles.active}`}
      onClick={() => selectSong()}
    >
      <img className={styles.img} src={music.img} alt={music.img} />
      <div className={styles.infoContainer}>
        <h5 className={styles.name}>{music.name}</h5>
        <h6 className={styles.artist}>{music.artist}</h6>
      </div>
    </div>
  );
};
SidenavItem.defaultProps = {
  music: {},
  audioElm: {},
};
SidenavItem.propTypes = {
  music: PropTypes.object,
  setActiveMusic: PropTypes.func.isRequired,
  audioElm: PropTypes.object,
  isPlaying: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
};
export default SidenavItem;
