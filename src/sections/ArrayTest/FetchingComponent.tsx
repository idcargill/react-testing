import 'isomorphic-fetch';
import React, { useState, useEffect } from 'react';

const getData = async () => {
  let data;
  try {
    data = await fetch('http://localhost:3000/api/hello');
    const result = await data.json();
    data = result;
  } catch (e) {
    console.log(e);
  }
  return data;
};

const FetchingComponent = () => {
  const [ data, setData ] = useState<any|null>(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
        setIsLoading(false);
    });
  }, []);

  return isLoading ? <p>loading...</p> : (
    <>
      <h1>Fetched Data Display</h1>
      <p>Receieved name: {data.name}</p>
    </>
  );
};

export default FetchingComponent;
