import {ApiKey,BaseUrl} from "./constants/constants"


export const action = `${BaseUrl}discover/movie?api_key=${ApiKey}&with_genres=28`;
export const triller = `${BaseUrl}discover/movie?api_key=${ApiKey}&with_genres=53`;
export const drama = `${BaseUrl}discover/movie?api_key=${ApiKey}&with_genres=18`;
export const comedy = `${BaseUrl}discover/movie?api_key=${ApiKey}&with_genres=35`;
export const trending = `${BaseUrl}/trending/all/day?api_key=${ApiKey}`;

