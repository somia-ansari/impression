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
        <h1>Courses Details</h1>
        <table>
          <thead>
            <tr>
              <td>Name of Course</td>
              <td>Duration</td>
              <td>End Year</td>
              <td>Institute</td>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td><input type="text" placeholder="Name of Course" /></td>
              <td>
                <RangePicker
                  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                  format={dateFormat} className="range"
                />
              </td>
              <td><input type="text" placeholder="name of Institute" /></td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Name of Course" /></td>
              <td>
                <RangePicker
                  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                  format={dateFormat} className="range"
                />
              </td>
              <td><input type="text" placeholder="name of Institute" /></td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Name of Course" /></td>
              <td>
                <RangePicker
                  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                  format={dateFormat} className="range"
                />
              </td>
              <td><input type="text" placeholder="name of Institute" /></td>
            </tr>
          </tbody>
        </table>
      </form>

    </div>
  )
}
