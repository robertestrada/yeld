import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AutoComplete from '@material-ui/lab/Autocomplete/Autocomplete';
import TextField from '@material-ui/core/TextField/TextField';
import { useStyles } from '../../../utilities/materialUI';
import yeldData from '../../../data/yeldData';




const NavSearchBar = ({ location, setLocation, term, setTerm, userLocation }: { location: string, setLocation: Dispatch<SetStateAction<string>>, term: string, setTerm: Dispatch<SetStateAction<string>>, userLocation: string }) => {
  const classes = useStyles();
  const history = useHistory();
  const { landingPage: { searchBar } } = yeldData;
  const [suggestions, setSuggestions] = useState(searchBar.initialSuggestions);
  
  console.log(location);
  
  
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
        // onChange={(e, value) => handleTermSelection(value)}
        renderInput={(params) => <TextField
          {...params}
          // onKeyDown={e => handleEnter(e.key)}
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
        // onChange={(e, value) => handleLocationSelection(value)}
        renderInput={(params) => <TextField
          {...params}
          // onKeyDown={e => handleEnter(e.key)}
          label={searchBar.locationLabel}
          placeholder={searchBar.locationPlaceholder}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />}
      />
    </div>)
}

export default NavSearchBar;