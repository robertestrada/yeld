import { Dispatch, SetStateAction } from "react";

const NavSearchBar = ({ location, setLocation, term, setTerm, userLocation }: { location: string, setLocation: Dispatch<SetStateAction<string>>, term: string, setTerm: Dispatch<SetStateAction<string>>, userLocation: string }) => {

console.log(location);
  return (
    <div className="NavSearchBar">
      NavSearchBar: {location}
    </div>)
}

export default NavSearchBar;