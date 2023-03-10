import React, { useState } from 'react';
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

  const handleClick = ():void => {
    if (style === ListItemStyle) {
      setStyle(ListItemRed);
    } else {
      setStyle(ListItemStyle);
    }
  };

  return(
    <li
    data-testid="array-list-item"
    onClick={handleClick}
    className={ListItemStyle}
    >
    {name} : {job}
  </li>
);
};

const ArrayComponent:React.FC<arrayProps> = ({data}) => (
    <>
    <h2 style={{ color: 'red' }} className={ListItemRed}role="heading">Render List</h2>
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

