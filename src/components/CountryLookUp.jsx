'use client';

import React, { useState } from 'react';

const CountryLookUp = () => {
  const [country, setCountry] = useState('United States');
  return <div>{country}</div>;
};

export default CountryLookUp;
