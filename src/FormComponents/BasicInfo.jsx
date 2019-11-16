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
          <input required type="text" placeholder="Your full name here" value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }} />
          {console.log(this.state.name)}
          <input type="email" placeholder="Your email here" value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }} />
          <input type="number" placeholder="Your contact number here" value={this.state.numb}
            onChange={(e) => {
              this.setState({ numb: e.target.value });
            }} />
          <input type="number" placeholder="Your WhatsApp number here" value={this.state.numbWtsap}
            onChange={(e) => {
              this.setState({ numbWtsap: e.target.value });
            }} />


          <div style={{ marginBottom: 16 }}>
            <Input size="large"
              addonBefore="Http://" addonAfter=".com"
              defaultValue="Your LinkedIn profile url here" value={this.state.linkedIn}
              onChange={(e) => {
                this.setState({ linkedIn: e.target.value });
              }} />
          </div>
          <TextArea size="large"
            rows={4} maxLength={80}
            placeholder="Your Residential Address here" value={this.state.address}
            allowClear={true}
            onChange={(e) => {
              this.setState({ address: e.target.value });
            }} />
        </form >
      </div>
    )
  }
}
