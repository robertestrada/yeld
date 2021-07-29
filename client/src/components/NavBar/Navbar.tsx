import NavSearchBar from './NavBarComponents/NavSearchBar';
import { Dispatch, SetStateAction } from "react";
import '../../styles/NavBar.css';
import yeldData from '../../data/yeldData';


const NavBar = (props: { 
  location: string, 
  term: string, 
  userLocation: string,
  searchLocation: string,
  setSearchLocation: Dispatch<SetStateAction<string>>
  searchTerm: string,
  setSearchTerm: Dispatch<SetStateAction<string>>,
  setLoadResults: Dispatch<SetStateAction<boolean>>,
  }) => {
  const logoUrl = yeldData.landingPage.logoUrl;
  
  return (
    <div className="NavBar">
      <div className="NavBar__header">
        <div className="NavBar__logo-container">
          <h1 className="NavBar__logo" style={{ backgroundImage: `url(${logoUrl})` }}>
            <a href="/">Yeld</a>
          </h1>
        </div>
        <div className="NavBar__search">
          <NavSearchBar {...props} />
        </div>
      </div>
    </div>)
}

export default NavBar;