import './CoursesInfo.css';
import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';


export default function CoursesInfo() {
  return (
    <div className="CoursesInfo">

      <form>
        <h1>Course Details</h1>

        <div className="wrapComp">
          <div className='colOne comp'>
            <h4>Name of Course</h4>
            <input type="text" placeholder="Name of course" />
            <input type="text" placeholder="Name of course" />
            <input type="text" placeholder="Name of course" />
          </div>
          <div className="colTwo comp">
            <h4>Institutes</h4>
            <input type="text" placeholder="Name of Institute" />
            <input type="text" placeholder="Name of Institute" />
            <input type="text" placeholder="Name of Institute" />
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
