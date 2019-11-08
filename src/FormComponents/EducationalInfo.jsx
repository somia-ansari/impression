import './EducationalInfo.css';
import React from 'react'

export default function EducationalInfo() {
  return (
    <div className="EducationalInfo">
      <form>
        <h1>Educational Details</h1>
        <table>
          <thead>
            <tr>
              <td>Degree Completed</td>
              <td>Year Completed</td>
              <td>Institute</td>
              <td>Subjects</td>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td><input type="text" placeholder="Degree name" /></td>
              <td><input type="number" placeholder="Year" /></td>
              <td><input type="text" placeholder="Institute name" /></td>
              <td><input type="text" placeholder="Field of Study e.g. Science" /></td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Degree name" /></td>
              <td><input type="number" placeholder="Year" /></td>
              <td><input type="text" placeholder="Institute name" /></td>
              <td><input type="text" placeholder="Field of Study e.g. Science" /></td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Degree name" /></td>
              <td><input type="number" placeholder="Year" /></td>
              <td><input type="text" placeholder="Institute name" /></td>
              <td><input type="text" placeholder="Field of Study e.g. Science" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
