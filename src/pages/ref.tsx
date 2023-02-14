import React from 'react';

import { Button } from 'styles/index.css';

const arr = [
  {
    name: 'frank',
    job: 'driver',
  },
  {
    name: 'Noni',
    job: 'tiger',
  },
  {
    name: 'Jaws',
    job: 'eating people',
  },
  {
    name: 'frank',
    job: 'driver',
  },
  {
    name: 'Noni',
    job: 'tiger',
  },
  {
    name: 'Jaws',
    job: 'eating people',
  }
];


type props = {};

class ListContainer extends React.Component {
  cardRef: any;
  itemRef: any;
  state: {
    arr: any[],
    targetIndex: number | null,
    show:boolean,
    hidden: number[],
  };

  constructor(props:props) {
    super(props);
    this.cardRef = React.createRef();
    this.itemRef = React.createRef();
    this.state = {
      arr: arr,
      targetIndex: null,
      show: false,
      hidden: [],
    };
  }

  heading = () => (
    <>
      <h3>This is a list of stuff</h3>
      <p>{this.state.targetIndex}</p>
    </>
  );

  componentDidMount() {
    if (this.cardRef.current) {
      this.cardRef.current.focus();
    }
  }

  componentDidUpdate(): void {
      if (this.cardRef.current) {
        this.cardRef.current.style='background-color: salmon';
        this.cardRef.current.textContent ="active";
        this.cardRef.current.focus();
      };
  }

  removeItem = (index:number) => {
    this.cardRef.current = null;
    this.itemRef.current = this.state.arr[index];
    this.setState({ hidden: this.state.hidden.push(index) });
  };

  handleClick = () => {
    window.location.reload();
  };

  button =() => (
    <button className={Button} onClick={this.handleClick}>Push</button>
  );

  undo = () => {
    this.state.hidden.findIndex();
    this.setState({ show: false });
  };

  undoButton = () => {
    if (this.state.show) {
      return (
        <button className={Button} onClick={this.undo}>UNDO</button>
      );
    }
  };

  renderList() {
    return (
      <ul>
          {this.state.arr.map((item, index) => {
            let cardRef;

            if (this.state.hidden.includes(index)) {
              return null;
            }

            if (index === this.state.targetIndex) {
              cardRef = this.cardRef;
            } else {
              cardRef = null;
            }

            return (
            <li
              key={index}
              tabIndex={0}
              ref={cardRef}
              style={{ backgroundColor: '#bcf9bc'}}
              onClick={() => this.removeItem(index)}
            >
              {item.job}
            </li>
            );
          }
          )}
        </ul>
    );
  }


  render() {
    return (
      <>
        {this.heading()}
        {this.renderList()}
        {this.button()}
        {this.undoButton()}
      </>
    );
  }
}


export default ListContainer;
