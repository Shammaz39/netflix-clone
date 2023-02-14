import {ApiKey,BaseUrl} from "./constants/constants"

export const trending = `${BaseUrl}/trending/all/day?api_key=${ApiKey}`;
export const action = `${BaseUrl}discover/movie?api_key=${ApiKey}&with_genres=28`;
export const triller = `${BaseUrl}discover/movie?api_key=${ApiKey}&with_genres=53`;