const AirData = (CountryId, countrydata) => {
  const Obj = countrydata.filter((Data) => Data.id === CountryId);
  if (Obj.length > 0) {
    const comps = Object.values(Obj[0].data.components);
    const aircomps = [
      { name: 'CO', value: null },
      { name: 'NO', value: null },
      { name: 'NO<sub>2</sub>', value: null },
      { name: 'O<sub>3</sub>', value: null },
      { name: 'SO<sub>2</sub>', value: null },
      { name: 'PM<sub>2.5</sub>', value: null },
      { name: 'PM<sub>10</sub>', value: null },
      { name: 'NH<sub>3</sub>', value: null },
    ];
    for (let i = 0; i < comps.length; i += 1) {
      aircomps[i].value = comps[i];
    }
    return aircomps;
  }
  return [];
};

const CityName = (CountryId, countrydata) => {
  const Obj = countrydata.filter((Data) => Data.id === CountryId);
  if (Obj.length > 0) {
    const countryName = Obj[0].city;
    return countryName;
  }
  return '';
};

export { AirData, CityName };
