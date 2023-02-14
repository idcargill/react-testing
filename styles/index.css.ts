import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('html, body, ul, ol', {
  margin: 10,
  boxSizing: 'border-box',
  listStyleType: 'none',
});

export const ListItemStyle = style({
  color: 'black',
});

export const ListItemRed = style({
  color: 'red',
});

export const PageContainer = style({
  border: '5px solid green',
  height: '300px',
  width: '300px',
});


export const Button = style({
  border: '1px solid #b000bc',
  backgroundColor: '#efa2ef',
  padding: 5,
  margin: 5,
});
