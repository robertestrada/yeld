import React, { useState, useEffect } from 'react';
import AutoComplete from '@material-ui/lab/Autocomplete/Autocomplete';
import TextField from '@material-ui/core/TextField/TextField';
import yeldData from '../../../data/yeldData';
import { getAutoSuggestions } from '../../utilities/yelpAPI'
import '../../../styles/SearchBar.css';

const SearchBar = () => {
  const { landingPage: { searchBar } } = yeldData;
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState(searchBar.initialSuggestions);

  useEffect(()=> {
    if (term.length > 0) {
      getAutoSuggestions(`?text=${term}`)
        .then((res) => {
          if (Array.isArray(res)) {
            setSuggestions(res);
          }
        })
    } else {
      setSuggestions(searchBar.initialSuggestions);
    }
  },[term]);

  console.log("term: ", term);
  console.log("location: ", location);
  console.log("suggestions: ", suggestions);
  return (
    <div className="SearchBar">
      <AutoComplete
        options={suggestions}
        getOptionLabel={(option) => option}
        // freeSolo={true}
        style={{ borderRight: "1px  solid #ddd", marginRight: "10px" }}
        fullWidth={true}
        onInputChange={(e, value) => setTerm(value)}
        // onChange={onTermChange}
        renderInput={(params) => <TextField {...params} 
                                    label={searchBar.termLabel} 
                                    placeholder={searchBar.termPlaceholder} 
                                    InputProps={{...params.InputProps, disableUnderline: true}}
                                  />}
      />
      <TextField 
        fullWidth={true}
        label={searchBar.locationLabel} 
        placeholder={searchBar.locationPlaceholder} 
        style={{ alignItems: "center"}}
        inputProps={{ style: { display: 'flex', alignItems: 'center' } }}
        InputProps={{ disableUnderline: true }}
        onChange={e => setLocation(e.target.value)}
      />
    </div>
  )
}

export default SearchBar;