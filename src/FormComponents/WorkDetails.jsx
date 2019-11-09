import './WorkDetails.css';
import React from 'react'

import { DatePicker, Col, Row } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';



export default function WorkDetails() {
  return (
    <div className="WorkDetails">
      <form>
        <h1>Work Experience</h1>


        <Row type="flex" justify="space-around">
          <Col span={8}><h4>Designation</h4></Col>
          <Col span={8}><h4>Company</h4></Col>
          <Col span={8}><h4>Duration</h4></Col>
        </Row>

        <Row type="flex" justify="space-around">
          <Col span={8}>
            <input type="text" placeholder="Post of work" />
          </Col>

          <Col span={8}>
            <input type="text" placeholder="Company name" />
          </Col>
          <Col span={8}>
            <RangePicker
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat} size="large"
            />
          </Col>

        </Row>

        <Row type="flex" justify="space-around">
          <Col span={8}>
            <input type="text" placeholder="Post of work" />
          </Col>
          <Col span={8}>
            <input type="text" placeholder="Company name" />
          </Col>
          <Col span={8}>
            <RangePicker
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat} size="large"
            />
          </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={8}>
            <input type="text" placeholder="Post of work" />
          </Col>
          <Col span={8}>
            <input type="text" placeholder="Company name" />
          </Col>
          <Col span={8}>
            <RangePicker
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat} size="large"
            />
          </Col>
        </Row>



      </form>
    </div>
  )
}
