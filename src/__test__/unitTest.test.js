import { AirData, CityName } from '../components/Airdata';

describe('Unit Tests', () => {
  const countrydatas = [
    {
      id: '5a4d6ad16-8fjgh-3x2v1-0f42as-1z3ca4f',
      city: 'Lebanon',
      data: {
        main: { aqi: 4 },
        components: {
          co: 405.11,
          no: 7.18,
          no2: 23.99,
          o3: 22.10,
          so2: 19.11,
          pm2_5: 71.92,
          pm10: 41.99,
          nh3: 5,
        },
        dt: 1669283682,
      },
    },
  ];
  const id = '5a4d6ad16-8fjgh-3x2v1-0f42as-1z3ca4f';

  test('Testing AirData()', () => {
    const result = AirData(id, countrydatas);
    const expectedResult = [
      { name: 'CO', value: 405.11 },
      { name: 'NO', value: 7.18 },
      { name: 'NO<sub>2</sub>', value: 23.99 },
      { name: 'O<sub>3</sub>', value: 22.10 },
      { name: 'SO<sub>2</sub>', value: 19.11 },
      { name: 'PM<sub>2.5</sub>', value: 71.92 },
      { name: 'PM<sub>10</sub>', value: 41.99 },
      { name: 'NH<sub>3</sub>', value: 5 },
    ];
    expect(result).toEqual(expectedResult);
  });

  test('Testing Countrys', () => {
    const result = CityName(id, countrydatas);
    const expectedResult = 'Lebanon';
    expect(result).toEqual(expectedResult);
  });
});
