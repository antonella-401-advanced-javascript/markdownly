import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdown, updateMarkdowns }) {
  return (
    <textarea className={styles.Editor} value={markdown} onChange={updateMarkdowns} />
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdowns: PropTypes.func
};

export default Editor;
