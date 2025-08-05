import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  resetFilters,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();

  // Подписка на изменение состояния
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const OnlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e) =>
    dispatch(setTitleFilter(e.target.value));

  const handleAuthorFilterChange = (e) =>
    dispatch(setAuthorFilter(e.target.value));

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Fitlter by title..."
            onChange={handleTitleFilterChange}
          ></input>
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Fitlter by author..."
            onChange={handleAuthorFilterChange}
          ></input>
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={OnlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            ></input>
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
