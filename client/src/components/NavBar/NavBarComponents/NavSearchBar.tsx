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
  { location, setLocation, term, setTerm, userLocation }: 
  { location: string, setLocation: Dispatch<SetStateAction<string>>, 
    term: string, setTerm: Dispatch<SetStateAction<string>>, 
    userLocation: string }) => {

  const classes = useStyles();
  const classesButton = useStylesButton();
  const history = useHistory();
  const { landingPage: { searchBar } } = yeldData;
  const [suggestions, setSuggestions] = useState(searchBar.initialSuggestions);
  

  const handleEnter = async (key: string) => {
    if (key === 'Enter') {
      const termParam = term !== '' ? `&term=${term}` : '';
      if (location !== '') {
        history.push(`/search?location=${location}${termParam}`);
      } else {
        history.push(`/search?location=${userLocation}${termParam}`);
      }
    }
  }

  const handleClick = async () => {
    const termParam = term !== '' ? `&term=${term}` : '';
    if (location !== '') {
      history.push(`/search?location=${location}${termParam}`);
    } else {
      history.push(`/search?location=${userLocation}${termParam}`);
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
  }, [term]);
  
  
  return (
    <div className="NavSearchBar">
      <AutoComplete
        id='term-field'
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
        onInputChange={(e, value) => setTerm(value)}
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
        id='location-field'
        ListboxProps={{ style: { maxHeight: '900px' } }}
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
          padding: "12px 16px",
          fontSize: "18px",
          boxShadow: "none",
        }}
        className={classesButton.button}
        endIcon={<SearchIcon>search</SearchIcon>}
      ></Button>
    </div>)
}

export default NavSearchBar;