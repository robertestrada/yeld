import NavSearchBar from './NavBarComponents/NavSearchBar';
import { Dispatch, SetStateAction } from "react";

const NavBar = (props: { location: string, setLocation: Dispatch<SetStateAction<string>>, term: string, setTerm: Dispatch<SetStateAction<string>>, userLocation: string }) => {
  
  console.log(props);
  
  return (
    <div className="NavBar">
      NavBar
      <NavSearchBar {...props} />
    </div>)
}

export default NavBar;