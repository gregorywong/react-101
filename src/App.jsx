import React from 'react';
import PropTypes from 'prop-types';

var image = require('./images/shopping-bags.svg');

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buyItems: ['milk', 'bread', 'bananas']

    }
  }

  render() {
    const { buyItems } = this.state;
    return (
      <div>
        <header className="text-center my-5">
          <img width="200px" src={image} />
          <h1>Shopping List</h1>
        </header>
        <div className="container">
          <div className="card">
            <div className="card-block">
              <table className="table">
                <caption className="top-caption mx-3">Shopping List</caption>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    buyItems.map(item => {
                      return (
                        <tr key={item}>
                          <th scope="row">1</th>
                          <td>{item}</td>
                          <td>Button</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;