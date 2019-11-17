import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { useDispatch,  useSelector } from 'react-redux';
import { getMarkdown } from '../selectors/documentSelectors';
import { updateMarkdown } from '../actions/documentActions';

const Document = () => {
  const dispatch = useDispatch();
  const markdown = useSelector(getMarkdown);
  const updateMarkdowns = ({ target }) => dispatch(updateMarkdown(target.value));
  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdowns={updateMarkdowns} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
};

export default Document;
