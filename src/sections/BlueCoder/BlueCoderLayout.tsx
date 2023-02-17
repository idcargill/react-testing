import React, { ReactNode, useCallback } from 'react';
import ReactHooksExample from './Hooks';

const Heading = ({ title }: {title: string}) => (
  <h2>{title}</h2>
);

const Box:React.FC<{children: ReactNode}> = ({ children }) => (
  <div>
    {children}
  </div>
);

interface ListProps {
  items: string[];
  onClick: (_selection: string) => void;
}

const ListOfThings:React.FC<ListProps> = ({ items, onClick }) => (
    <ul>
      {items.map((item, idx) => (
        <li key={idx} onClick={() => onClick(item)}>
          {item}
        </li>
      ))}
    </ul>
);


const BlueCoderLayout = () => {
  const handleCLick = useCallback((item: string) => {
    console.log(item);
  }, []);

  return (
  <>
    <Heading title="Blue Collar Coder" />
    <Box>
      <p>hi</p>
      <ListOfThings items={['fish', 'shark', 'donkey']} onClick={handleCLick} />
    </Box>

    <ReactHooksExample />
  </>
  );
};


export default BlueCoderLayout;
