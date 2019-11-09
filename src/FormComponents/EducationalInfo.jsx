import { Row, Col } from 'antd';
import './EducationalInfo.css';
import React from 'react'

export default function EducationalInfo() {
  return (
    <div className="EducationalInfo">
      <form>
        <h1>Educational Details</h1>


        <Row type="flex" justify="space-around">
          <Col span={6}><h4>Degree Completed</h4></Col>
          <Col span={6}><h4>Year Completed</h4></Col>
          <Col span={6}><h4>Institute</h4></Col>
          <Col span={6}><h4>Subjects</h4></Col>
        </Row>

        <Row type="flex" justify="space-around">
          <Col span={6}>
            <input type="text" placeholder="Degree name" />
          </Col>
          <Col span={6}>
            <input type="number" placeholder="Year" />
          </Col>
          <Col span={6}>
            <input type="text" placeholder="Institute name" />
          </Col>
          <Col span={6}>
            <input type="text" placeholder="Field of Study e.g. Science" />
          </Col>
        </Row>

        <Row type="flex" justify="space-around">
          <Col span={6}>
            <input type="text" placeholder="Degree name" />
          </Col>
          <Col span={6}>
            <input type="number" placeholder="Year" />
          </Col>
          <Col span={6}>
            <input type="text" placeholder="Institute name" />
          </Col>
          <Col span={6}>
            <input type="text" placeholder="Field of Study e.g. Science" />
          </Col>
        </Row>

        <Row type="flex" justify="space-around">
          <Col span={6}>
            <input type="text" placeholder="Degree name" />
          </Col>
          <Col span={6}>
            <input type="number" placeholder="Year" />
          </Col>
          <Col span={6}>
            <input type="text" placeholder="Institute name" />
          </Col>
          <Col span={6}>
            <input type="text" placeholder="Field of Study e.g. Science" />
          </Col>
        </Row>

      </form>
    </div>
  )
}
