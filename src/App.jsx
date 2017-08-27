import React from 'react';
import PropTypes from 'prop-types';

var image = require('./images/shopping-bags.svg');

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buyItems: ['milk', 'bread', 'bananas'],
      message: ''
    }
  }

  addItem(e) {
    e.preventDefault();
    const {buyItems, message} = this.state;
    const newItem = this.newItem.value;

    if (buyItems.includes(newItem)) {
      this.setState({
        message: 'This item is already on the list.'
      });
    }
    else if (newItem !== '') {
      this.setState({
        buyItems: [...this.state.buyItems, newItem],
        message: ''
      });
    }
    else {
      this.setState({
        message: ''
      });
    }

    this.addForm.reset();
  }

  removeItem(item) {
    console.log('remove ' + item);
  }

  render() {
    const { buyItems, message } = this.state;
    return (
      <div>
        <header className="text-center my-4">
          <img width="200px" src={image} />
          <h1>Shopping List</h1>
        </header>

        <form ref={(input) => { this.addForm = input }} className="form-inline justify-content-center my-3" onSubmit={(e) => { this.addItem(e) }}>
          <div className="form-group">
            <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
            <input ref={(input) => { this.newItem = input }} type="text" placeholder="Bread" className="form-control" id="newItemInput" />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>

        <div className="row">
          <div className="col-sm-8 col-md-7 col-lg-6 mx-auto">
            <div className="card">
              <div className="card-block">
                {
                  message !== '' && <div className="message text-center text-danger mt-3">{message}</div>
                }
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
                            <td className="">
                              <button onClick={e => this.removeItem(item)} type="button" className="btn btn-small btn-danger">
                                Remove
                            </button>
                            </td>
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
      </div>
    )
  }
}

export default App;