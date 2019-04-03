const initialState = () =>({
  loading: false,
  results: [],
  error: null,
})

export default function pokemonReducer(state = initialState(), action) {
  switch (action.type) {
    case 'POKEMON_FETCHING':
      return {
        ...state,
        ...initialState(),
        loading: true,
      }
    case 'POKEMON_FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case 'POKEMON_FETCHED':
      return {
        ...state,
        loading: true,
        results: action.results,
      }
    default:
      return state
  }
}