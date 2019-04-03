import { request } from '../request';

const POKEMON_SERVICE_BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchAll = () => request(`${POKEMON_SERVICE_BASE_URL}/pokemon`);
export const fetchByName = name => request(`${POKEMON_SERVICE_BASE_URL}/pokemon/${name}`);
