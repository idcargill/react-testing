import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('html, body, ul, ol', {
  margin: 10,
  boxSizing: 'border-box',
  listStyleType: 'none',
});

export const ListContainer = style({
  listStyleType: 'none',
  cursor: 'pointer',
  color: 'black',
});

export const ListContainerAwesome = style({
  color: 'red',
  padding: 10,
  cursor: 'pointer',
});

export const PageContainer = style({
  border: '5px solid green',
  height: '300px',
  width: '300px',
});
