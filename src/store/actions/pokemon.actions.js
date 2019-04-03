import { fetchAll as fetchAllPokemons } from '../../services/pokemon/pokemon'

export const fetchAll = () => dispatch => {
  dispatch({ type: "POKEMON_FETCHING" })

  fetchAllPokemons()
    .then(({ results }) => {
      console.log('POKEMON_FETCHED', results)
      dispatch({
        type: "POKEMON_FETCHED",
        results,
      })
    })
    .catch(error => {
      dispatch({
        type: "POKEMON_FETCH_ERROR",
        error,
      })
    })
}