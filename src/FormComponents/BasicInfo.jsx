import './BasicInfo.css';
import { Input } from 'antd';
import React, { Component } from 'react'
const { TextArea } = Input;



export default class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      numb: '',
      numbWtsap: '',
      linkedIn: '',
      address: ''

    };
  }

  render() {
    return (
      <div className="BasicInfo">
        <h1>Basic Information</h1>
        <form>
          <input required type="text" placeholder="Your full name here"
            onChange={(e) => {
              this.setState({ name: e.target.name });
            }} />
          <input type="email" placeholder="Your email here"
            onChange={(e) => {
              this.setState({ email: e.target.email });
            }} />
          <input type="number" placeholder="Your contact number here"
            onChange={(e) => {
              this.setState({ numb: e.target.numb });
            }} />
          <input type="number" placeholder="Your WhatsApp number here"
            onChange={(e) => {
              this.setState({ numbWtsap: e.target.numbWtsap });
            }} />
          <div style={{ marginBottom: 16 }}>
            <Input size="large"
              addonBefore="Http://" addonAfter=".com"
              defaultValue="Your LinkedIn profile url here"
              onChange={(e) => {
                this.setState({ linkedIn: e.target.linkedIn });
              }} />
          </div>
          <TextArea size="large"
            rows={4} maxLength={80}
            placeholder="Your Residential Address here"
            allowClear={true}
            onChange={(e) => {
              this.setState({ address: e.target.address });
            }} />
        </form >
      </div>
    )
  }
}
