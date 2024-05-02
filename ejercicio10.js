const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    if (capitals[country]) {
      return capitals[country];
    } else {
      return `No se encontró la capital para el país: ${country}`;
    }
  }
  
  console.log(getCapital("Italy")); 
