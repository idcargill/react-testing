import 'isomorphic-fetch';
import React, { useState, useEffect } from 'react';

export const getData = async () => {
  let data;
  try {
    data = await fetch('http://localhost:3000/api/hello');
    const result = await data.json();
    data = result;
  } catch (e) {
    console.log(e.message);
    // return { name: 'error '};
  }
  return data;
};

const FetchingComponent = () => {
  const [ data, setData ] = useState<any|null>(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    getData()
      .then(() => {
        setData(data);
        setIsLoading(false);
    });
  }, [data]);

  return isLoading ? <p>loading...</p> : (
    <div data-testid="fetch-component">
      <h1>Fetched Data Display</h1>
      <p>Receieved name: {data.name}</p>
    </div>
  );
};

export default FetchingComponent;
