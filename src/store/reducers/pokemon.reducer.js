const initialState = () => ({
  loading: false,
  error: null,
  results: [],
  pageSize: 20,
  pages: 0,
  currentPage: 1,
  totalItems: 0,
});

export default function pokemonReducer(state = initialState(), action) {
  switch (action.type) {
    case 'SET_PAGESIZE':
      return {
        ...state,
        pageSize: Number(action.pageSize),
      };
    case 'POKEMON_FETCHING':
      return {
        ...state,
        loading: true,
        error: null,
        results: [],
        currentPage: action.page,
      };
    case 'POKEMON_FETCH_ERROR':
      return {
        ...state,
        loading: false,
        results: [],
        error: action.error,
      };
    case 'POKEMON_FETCHED':
      return {
        ...state,
        loading: false,
        results: action.results,
        totalItems: action.count,
        pages: Math.ceil(action.count / state.pageSize),
      };
    default:
      return state;
  }
}
