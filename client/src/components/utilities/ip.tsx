const states = require('us-state-converter');

export const getIP = async () => {
  const response = await fetch('https://geolocation-db.com/json/');
  if (response.ok) {
    const result = await response.json();
    const stateAbbr = states.abbr(result.state);
    return { state: stateAbbr, city: result.city };
  } else {
    console.log('IP fetch error');
    return null;
  }
}