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

        <div className="wrapComp">
          <div className='colOne comp'>
            <h4>Designation</h4>
            <input type="text" placeholder="Post of work" />
            <input type="text" placeholder="Post of work" />
            <input type="text" placeholder="Post of work" />
          </div>
          <div className="colTwo comp">
            <h4>Company</h4>
            <input type="text" placeholder="Company name" />
            <input type="text" placeholder="Company name" />
            <input type="text" placeholder="Company name" />
          </div>

          <div className="colThree comp">
            <h4>Duration</h4>
            <RangePicker
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat} size="large"
            />
            <RangePicker
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat} size="large"
            />
            <RangePicker
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat} size="large"
            />
          </div>
        </div>
      </form>
    </div >
  )
}
