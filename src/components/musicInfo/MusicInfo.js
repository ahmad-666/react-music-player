import React from 'react';
import PropTypes from 'prop-types';
import styles from './musicInfo.module.scss';

const MusicInfo = ({ img, name, artist }) => (
  <div className={styles.musicInfo}>
    <img src={img} alt={img} className={styles.img} />
    <h1 className={styles.name}>{name}</h1>
    <h2 className={styles.artist}>{artist}</h2>
  </div>
);
MusicInfo.defaultProps = {
  img: '',
  name: '',
  artist: '',
};
MusicInfo.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
};
export default MusicInfo;
