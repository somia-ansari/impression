import './CoursesInfo.css';
import React from 'react'
import { DatePicker, Row, Col } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';


export default function CoursesInfo() {
  return (
    <div className="CoursesInfo">
      <h1>Courses Details</h1>

      <Row type="flex" justify="space-around">
        <Col span={8}><h4>Name of Course</h4></Col>
        <Col span={8}><h4>Duration</h4></Col>
        <Col span={8}><h4>Institute</h4></Col>
      </Row>

      <Row type="flex" justify="space-around">
        <Col span={8}>
          <input type="text" placeholder="Name of Course" />
        </Col>

        <Col span={8}>
          <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat} size="large"
          />
        </Col>

        <Col span={8}>
          <input type="text" placeholder="name of Institute" />
        </Col>
      </Row>

      <Row type="flex" justify="space-around">
        <Col span={8}>
          <input type="text" placeholder="Name of Course" />
        </Col>
        <Col span={8}>
          <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat} size="large"
          />
        </Col>
        <Col span={8}>
          <input type="text" placeholder="Name of Institute" />
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span={8}>
          <input type="text" placeholder="Name of Course" />
        </Col>
        <Col span={8}>
          <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat} size="large"
          />
        </Col>
        <Col span={8}>
          <input type="text" placeholder="Name of Institute" />
        </Col>
      </Row>

    </div >
  )
}
