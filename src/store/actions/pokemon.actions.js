import { fetchAll as fetchAllPokemons } from '../../services/pokemon/pokemon';

export const fetchAll = page => (dispatch, getState) => {
  dispatch({
    type: 'POKEMON_FETCHING',
    page,
  });

  fetchAllPokemons({
      params: {
        limit: getState().pokemon.pageSize,
        offset: getState().pokemon.pageSize * page,
      }
    })
    .then(({ count, results }) => {
      dispatch({
        type: 'POKEMON_FETCHED',
        results,
        count,
      });
    })
    .catch(error => {
      dispatch({
        type: 'POKEMON_FETCH_ERROR',
        error,
      });
    });
};

export const setPageSize = pageSize => (dispatch, getState) => {
  dispatch({
    type: "SET_PAGESIZE",
    pageSize,
  })
  dispatch(fetchAll(getState().pokemon.currentPage))
};
