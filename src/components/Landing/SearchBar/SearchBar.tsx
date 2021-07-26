import React, { useState, useEffect } from 'react';
import AutoComplete from '@material-ui/lab/AutoComplete';
import TextField from '@material-ui/core/TextField';
import yeldData from '../../../data/yeldData';
import '../../../styles/SearchBar.css';

const SearchBar = () => {
  // const [suggestions, setSuggestions] = useState();
  const { landingPage: { searchBar } } = yeldData;
  
  
  return (
    <div className="SearchBar">
      <AutoComplete
        options={searchBar.initialSuggestions}
        getOptionLabel={(option) => option}
        freeSolo={true}
        style={{ borderRight: "1px  solid grey", marginRight: "10px" }}
        fullWidth={true}
        renderInput={(params) => <TextField {...params} 
                                    label={searchBar.termLabel} 
                                    placeholder={searchBar.termPlaceholder} 
                                    InputProps={{disableUnderline: true}}
                                  />}
      />
      <TextField 
        fullWidth={true}
        label={searchBar.locationLabel} 
        placeholder={searchBar.locationPlaceholder} 
        style={{ alignItems: "center"}}
        inputProps={{ style: { display: 'flex', alignItems: 'center' } }}
        InputProps={{ disableUnderline: true }}
      />
    </div>
  )
}

export default SearchBar;