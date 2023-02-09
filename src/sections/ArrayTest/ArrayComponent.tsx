import React, { useState } from 'react';
import { ListContainer, ListContainerAwesome } from 'styles/index.css';

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
  const [ style, setStyle ] = useState(ListContainer);

  const handleClick = ():void => {
    if (style === ListContainer) {
      setStyle(ListContainerAwesome);
    } else {
      setStyle(ListContainer);
    }
  };

  return(
    <li
    data-testid="array-list-item"
    onClick={handleClick}
    className={style}
    >
    {name} : {job}
  </li>
);
};

const ArrayComponent:React.FC<arrayProps> = ({data}) => (
    <>
    <h2 role="heading">Render List</h2>
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

