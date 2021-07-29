import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import AutoComplete from '@material-ui/lab/Autocomplete/Autocomplete';
import TextField from '@material-ui/core/TextField/TextField';
import { makeStyles } from '@material-ui/core/styles';
import yeldData from '../../../data/yeldData';
import { getAutoSuggestions, getBusinesses } from '../../../utilities/yelpAPI';
import '../../../styles/SearchBar.css';

const useStyles = makeStyles({
  paper: {
    transform: 'translateY(-4px)',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    width: "100%",
  }
});

const SearchBar = ({ userLocation }: { userLocation: string }) => {
  const history = useHistory();
  const { landingPage: { searchBar } } = yeldData;
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState(searchBar.initialSuggestions);
  const classes = useStyles();


  const handleEnter = async (key: string) => {
    if (key === 'Enter') {
      const result = await getBusinesses(location, term);
    }
  }

  const handleTermSelection = (termStr: string | null) => {
    if (termStr !== null) {
      history.push(`/search?location=${location}&term=${termStr}`);
    }
  }

  const handleLocationSelection = (loc: string | null) => {
    if (loc === searchBar.locationCurrentText && term !== '') {
      history.push(`/search?location=${userLocation}&term=${term}`);
    } else if (loc === searchBar.locationCurrentText) {
      setLocation(userLocation);
    }
  }

  useEffect(() => {
    setLocation(userLocation);
  }, [userLocation]);

  useEffect(()=> {
    const termTimer = setTimeout(() => {
      if (term !== '') {
        getAutoSuggestions(term)
        .then((res) => {
          if (Array.isArray(res) && term !== '') {
            setSuggestions(res);
          }
        })
      } else {
        setSuggestions(searchBar.initialSuggestions);
      }
    }, 250);
    return () => clearTimeout(termTimer);
  },[term]);


  return (
    <div className="SearchBar">
      <AutoComplete
        id='term-field'
        ListboxProps={{ style: { maxHeight: '900px' }}}
        classes={{ paper: classes.paper }}
        filterOptions={(options, state) => options}
        options={suggestions}
        freeSolo={true}
        loading={true}
        loadingText={'Yelding...'}
        getOptionLabel={(option) => option}
        style={{ borderRight: "1px  solid #ddd", marginRight: "10px" }}
        fullWidth={true}
        onInputChange={(e, value) => setTerm(value)}
        onChange={(e, value) => handleTermSelection(value)}
        renderInput={(params) => <TextField 
          {...params} 
          onKeyDown={e => handleEnter(e.key)}
          label={searchBar.termLabel} 
          placeholder={searchBar.termPlaceholder} 
          InputProps={{...params.InputProps, disableUnderline: true}}
        />}
      />
      <AutoComplete
        id='location-field'
        ListboxProps={{style: { maxHeight: '900px'}}}
        classes={{ paper: classes.paper }}
        value={location}
        filterOptions={(options, state) => options}
        options={[searchBar.locationCurrentText]}
        freeSolo={true}
        loading={true}
        loadingText={'Yelding...'}
        getOptionLabel={(option) => option}
        fullWidth={true}
        onInputChange={(e, value) => setLocation(value)}
        onChange={(e, value) => handleLocationSelection(value)}
        renderInput={(params) => <TextField 
          {...params}
          onKeyDown={e => handleEnter(e.key)}
          label={searchBar.locationLabel}
          placeholder={searchBar.locationPlaceholder}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />}
      />
    </div>
  )
}

export default SearchBar;