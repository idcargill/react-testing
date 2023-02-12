import React, { useState, useEffect } from 'react';
import { ListItemStyle, ListItemRed } from 'styles/index.css';

export type peopleType = {
  id: number;
  name: string;
  job: string;
}

export const peopleData: peopleType[] = [
  {
    id: 1,
    name: 'frank',
    job: 'pizza',
  },
  {
    id: 2,
    name: 'jo',
    job: 'broom pusher',
  },
  {
    id: 3,
    name: 'Tiger',
    job: 'Kitten',
  }
];

type arrayProps = {
  data: peopleType[];
}


type listProps = {
  key: number;
  name: string;
  job: string;
}

const ListItem = ({ name, job}:listProps) => {
  const [ style, setStyle ] = useState(ListItemStyle);
  const [ text, setText ] = useState('');

  useEffect(() => {
    setText(name);
  }, []);


  const handleClick = ():void => {
    if (style === ListItemStyle) {
      setStyle(ListItemRed);
      setText('CLICKED!');
    } else {
      setStyle(ListItemStyle);
      setText(name);
    }
  };

  return(
    <li
      data-testid="array-list-item"
      onClick={handleClick}
      className={ListItemStyle}
    >
    {text} : {job}
  </li>
);
};

const ArrayComponent:React.FC<arrayProps> = ({data}) => (
    <>
    <h2 className={ListItemRed}role="heading">Render List</h2>
    <ul>
    {data.map((person:peopleType, index:number) => (
      <ListItem
        name={person.name}
        job={person.job}
        key={index}
      />
    ))}
    </ul>
  </>
);

export default ArrayComponent;

