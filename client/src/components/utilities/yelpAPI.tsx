import React from 'react';
import queryString from 'query-string';
import { YELP_API_BASE_URL, YELP_BEARER_TOKEN, baseUrl } from '../utilities/config';

export const getAutoSuggestions = async (params: string) => {
  const response = await fetch(`${baseUrl}/yelpAPI${params}`);
  if (response.ok){
    const result = await response.json();
    console.log("suggestions: ", result);
  }
}