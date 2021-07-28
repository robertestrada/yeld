import React from 'react';
import { baseUrl } from '../utilities/config';

export const getAutoSuggestions = async (params: string) => {
  const response = await fetch(`${baseUrl}/yelpAPI${params}`);
  if (response.ok){
    const result = await response.json();
    console.log("result: ", result);
    const categories = result.categories.map((category: { title: string }) => {
      return category.title;
    })
    const terms = result.terms.map((category: { text: string }) => {
      return category.text;
    })
    const suggestions = [...terms, ...categories];
    console.log("suggestions: ", suggestions);
    return suggestions;
  }
}