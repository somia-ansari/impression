import React, { Component } from 'react'
import './Form.css';
import BasicInfo from '../FormComponents/BasicInfo';
import EducationalInfo from '../FormComponents/EducationalInfo';
import CoursesInfo from '../FormComponents/CoursesInfo';


import { Steps, Button, message } from 'antd';
import WorkDetails from '../FormComponents/WorkDetails';

const { Step } = Steps;

const steps = [
  {
    title: 'Basic Information',
    content: <BasicInfo />,
  },
  {
    title: 'Educational Details',
    content: <EducationalInfo />,
  },
  {
    title: 'Courses Details',
    content: <CoursesInfo />
  },
  {
    title: 'Work Experience',
    content: <WorkDetails />
  },
];


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className="Form">
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}
