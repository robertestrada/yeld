import React from 'react';
import { baseUrl } from '../utilities/config';

export const getAutoSuggestions = async (params: string) => {
  const response = await fetch(`/yelpAPI/autocomplete?text=${params}`);
  if (response.ok){
    const result = await response.json();
    const categories = result.categories.map((category: { title: string }) => {
      return category.title;
    })
    const terms = result.terms.map((category: { text: string }) => {
      return category.text;
    })
    const suggestions = [...terms, ...categories];
    return suggestions;
  }
}

export const getBusinesses = async (location: string, term = '') => {
  let optionalTerm = '';
  if (term !== '') {
    optionalTerm = `&term=${term}`;
  }
  const response = await fetch(`/yelpAPI/search?location=${location}${optionalTerm}`);
  if (response.ok) {
    const result = await response.json();
    const businesses = result.businesses;
    return businesses;
  }
}