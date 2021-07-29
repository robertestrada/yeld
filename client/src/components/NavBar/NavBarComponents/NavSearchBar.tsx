import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AutoComplete from '@material-ui/lab/Autocomplete/Autocomplete';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles, useStylesButton } from '../../../utilities/materialUI';
import { getAutoSuggestions } from '../../../utilities/yelpAPI';
import yeldData from '../../../data/yeldData';
import '../../../styles/NavSearchBar.css';



const NavSearchBar = (
  { location, term, userLocation, 
    searchLocation, setSearchLocation,
    searchTerm, setSearchTerm, setLoadResults
  }: 
  { location: string, 
    term: string, 
    userLocation: string,
    searchLocation: string,
    setSearchLocation: Dispatch<SetStateAction<string>>
    searchTerm: string,
    setSearchTerm: Dispatch<SetStateAction<string>>,
    setLoadResults: Dispatch<SetStateAction<boolean>>,
  }) => {

  const classes = useStyles();
  const classesButton = useStylesButton();
  const history = useHistory();
  const { landingPage: { searchBar } } = yeldData;
  const [suggestions, setSuggestions] = useState(searchBar.initialSuggestions);
  

  const handleEnter = async (key: string) => {
    if (key === 'Enter') {
      const termParam = searchTerm !== '' ? `&term=${searchTerm}` : '';
      if (searchLocation !== '') {
        history.push(`/search?location=${searchLocation}${termParam}`);
        setLoadResults(true);
      } else {
        history.push(`/search?location=${userLocation}${termParam}`);
        setLoadResults(true);
      }
    }
  }

  const handleClick = async () => {
    const termParam = searchTerm !== '' ? `&term=${searchTerm}` : '';
    if (searchLocation !== '') {
      history.push(`/search?location=${searchLocation}${termParam}`);
      setLoadResults(true);
    } else {
      history.push(`/search?location=${userLocation}${termParam}`);
      setLoadResults(true);
    }
  }

  const handleTermSelection = (termStr: string | null) => {
    if (termStr !== null) {
      if (searchLocation !== '') {
        history.push(`/search?location=${searchLocation}&term=${termStr}`);
        setLoadResults(true);
      } else {
        history.push(`/search?location=${userLocation}&term=${termStr}`);
        setLoadResults(true);
      }
    }
  }

  const handleLocationSelection = (loc: string | null) => {
    if (loc === searchBar.locationCurrentText && searchTerm !== '') {
      history.push(`/search?location=${userLocation}&term=${searchTerm}`);
      setLoadResults(true);
    } else if (loc === searchBar.locationCurrentText) {
      setSearchLocation(userLocation);
    }
  }

  useEffect(() => {
    setSearchTerm(term);
  }, [term]);

  useEffect(() => {
    setSearchLocation(location);
  }, [location]);

  useEffect(() => {
    const termTimer = setTimeout(() => {
      if (searchTerm !== '') {
        getAutoSuggestions(searchTerm)
          .then((res) => {
            if (Array.isArray(res) && searchTerm !== '') {
              setSuggestions(res);
            }
          })
      } else {
        setSuggestions(searchBar.initialSuggestions);
      }
    }, 250);
    return () => clearTimeout(termTimer);
  }, [searchTerm]);
  
  
  return (
    <div className="NavSearchBar">
      <AutoComplete
        id='searchTerm-field'
        value={searchTerm}
        blurOnSelect={true}
        ListboxProps={{ style: { maxHeight: '900px' } }}
        classes={{ paper: classes.paper }}
        filterOptions={(options, state) => options}
        options={suggestions}
        freeSolo={true}
        loading={true}
        loadingText={'Yelding...'}
        getOptionLabel={(option) => option}
        style={{ borderRight: "1px  solid #ddd", marginRight: "10px" }}
        fullWidth={true}
        onInputChange={(e, value) => setSearchTerm(value)}
        onChange={(e, value) => handleTermSelection(value)}
        renderInput={(params) => <TextField
          {...params}
          onKeyDown={e => handleEnter(e.key)}
          label={searchBar.termLabel}
          placeholder={searchBar.termPlaceholder}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />}
      />
      <AutoComplete
        id='searchLocation-field'
        ListboxProps={{ style: { maxHeight: '900px' } }}
        classes={{ paper: classes.paper }}
        value={searchLocation}
        filterOptions={(options, state) => options}
        options={[searchBar.locationCurrentText]}
        freeSolo={true}
        loading={true}
        loadingText={'Yelding...'}
        getOptionLabel={(option) => option}
        fullWidth={true}
        onInputChange={(e, value) => setSearchLocation(value)}
        onChange={(e, value) => handleLocationSelection(value)}
        renderInput={(params) => <TextField
          {...params}
          onKeyDown={e => handleEnter(e.key)}
          label={searchBar.locationLabel}
          placeholder={searchBar.locationPlaceholder}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />}
      />
      <Button
        onClick={() => handleClick()}
        variant="contained"
        color="primary"
        style={{
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
          borderTopLeftRadius: '0px',
          borderBottomLeftRadius: '0px',
          backgroundColor: "rgb(244,57,1)",
          padding: "0px 0px",
          fontSize: "18px",
          boxShadow: "none",
        }}
        className={classesButton.button}
        endIcon={<SearchIcon style={{ position: 'relative', left: '-4px' }}>search</SearchIcon>}
      ></Button>
    </div>)
}

export default NavSearchBar;