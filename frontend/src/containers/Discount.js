import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import { getDiscount } from '../actionCreators';

class Discount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promocode: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit() {
    this.props.getDiscount(this.state.promocode);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Label htmlFor="promocode">Discount Code:</Form.Label>
        <input
          onChange={this.handleChange}
          name="promocode"
          value={this.state.promocode}
        >
        </input>
        <Button onClick={this.handleSubmit}>Apply Discount</Button>
      </Form>
    )
  }
}

export default connect(null, { getDiscount })(Discount);