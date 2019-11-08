import './WorkDetails.css';
import React from 'react'

import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';



export default function WorkDetails() {
  return (
    <div className="WorkDetails">
      <form>
        <h1>Work Experience</h1>
        <table>
          <thead>
            <tr>
              <td>Designation</td>
              <td>Company</td>
              <td>Duration</td>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td><input type="text" placeholder="Post of work" /></td>
              <td><input type="text" placeholder="Company name" /></td>
              <td>
                <RangePicker
                  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                  format={dateFormat} className="range"
                />
              </td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Post of work" /></td>
              <td><input type="text" placeholder="Company name" /></td>
              <td>
                <RangePicker
                  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                  format={dateFormat} className="range"
                />
              </td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Post of work" /></td>
              <td><input type="text" placeholder="Company name" /></td>
              <td>
                <RangePicker
                  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                  format={dateFormat} className="range"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
