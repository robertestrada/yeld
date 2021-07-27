import React from 'react';
import queryString from 'query-string';
import { YELP_API_BASE_URL, YELP_BEARER_TOKEN } from '../utilities/config';

export const getAutoSuggestions = async (params: string) => {
  const response = await fetch(`${YELP_API_BASE_URL}/autocomplete${params}`, {
    headers: {
      Authorization: `Bearer ${YELP_BEARER_TOKEN}`,
    }
  });
  if (response.ok){
    const result = await response.json();
    console.log("suggestions: ", result);
  }
}