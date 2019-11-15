import React from 'react';
import TabDeck from '../components/tab/TabDeck';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchTerm, getMatchTitlesByTitle } from '../selectors/documentSelectors';
import { addTab, deleteTab, addSearch, getMatchTitle } from '../actions/documentActions';
import Filter from '../components/filter/Filter';

const Tabs = () => {
  const dispatch = useDispatch();
  const handleClick = tabNumber => dispatch(addTab(tabNumber));
  const handleDelete = title =>  dispatch(deleteTab(title));
  const handleSubmit = searchTerm => (event.preventDefault(), dispatch(getMatchTitle(searchTerm)));
  const handleChange = ({ target }) => (event.preventDefault(),
  dispatch(addSearch(target.value)));
  const titles = useSelector(getMatchTitlesByTitle);
  const searchTerm = useSelector(getSearchTerm);
  return (
    <>
      <TabDeck handleDelete={handleDelete} titles={titles} />
      <button onClick={() => handleClick(titles.length)}>ADD</button>
      <Filter handleSubmit={handleSubmit} handleChange={handleChange} searchTerm={searchTerm} />
    </>
  );
};

export default Tabs;