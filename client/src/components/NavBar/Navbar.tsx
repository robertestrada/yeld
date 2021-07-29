import NavSearchBar from './NavBarComponents/NavSearchBar';
import { Dispatch, SetStateAction } from "react";
import '../../styles/NavBar.css';
import yeldData from '../../data/yeldData';


const NavBar = (props: { location: string, setLocation: Dispatch<SetStateAction<string>>, term: string, setTerm: Dispatch<SetStateAction<string>>, userLocation: string }) => {
  const logoUrl = yeldData.landingPage.logoUrl;
  
  
  return (
    <div className="NavBar">
      <div className="NavBar__header">
        {/* <div className="NavBar__logo-container"> */}
          <h1 className="NavBar__logo" style={{ backgroundImage: `url(${logoUrl})` }}>
            <a href="/">Yeld</a>
          </h1>
        {/* </div> */}
        <NavSearchBar {...props} />
      </div>
    </div>)
}

export default NavBar;