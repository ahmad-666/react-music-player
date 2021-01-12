import React from 'react';
import PropTypes from 'prop-types';
import SidenavItem from '../sideNavItem/SidenavItem';
import styles from './sidenav.module.scss';

const Sidenav = ({
  musics,
  activeMusic,
  setActiveMusic,
  audioElm,
  isPlaying,
  isNavOpen,
}) => (
  <div className={`${styles.sidenav} ${isNavOpen && styles.open}`}>
    <h5 className={styles.title}> library </h5>
    {musics.map(music => (
      <SidenavItem
        key={music._id}
        music={music}
        setActiveMusic={setActiveMusic}
        audioElm={audioElm}
        isPlaying={isPlaying}
        isActive={music._id === (activeMusic && activeMusic._id)}
      />
    ))}
  </div>
);
Sidenav.defaultProps = {
  musics: [],
  activeMusic: {},
  audioElm: {},
};
Sidenav.propTypes = {
  musics: PropTypes.array,
  activeMusic: PropTypes.object,
  setActiveMusic: PropTypes.func.isRequired,
  audioElm: PropTypes.object,
  isPlaying: PropTypes.bool.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
};
export default Sidenav;
