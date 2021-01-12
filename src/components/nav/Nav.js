import React from 'react';
import PropTypes from 'prop-types';
import styles from './nav.module.scss';
import logo from '../../assets/imgs/logo.png';

const Nav = ({ setIsNavOpen }) => {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={logo} alt={logo} />
      <button
        type='button'
        className={styles.button}
        onClick={() => setIsNavOpen(currNavOpen => !currNavOpen)}
      >
        library
      </button>
    </nav>
  );
};
Nav.propTypes = {
  setIsNavOpen: PropTypes.func.isRequired,
};
export default Nav;
