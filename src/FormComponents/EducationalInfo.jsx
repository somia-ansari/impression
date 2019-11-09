import './EducationalInfo.css';
import React from 'react'

export default function EducationalInfo() {
  return (
    <div className="EducationalInfo">
      <form>
        <h1>Educational Details</h1>
        <div className="wrapComp">
          <div className='colOne comp'>
            <h4>Degree Completed</h4>
            <input type="text" placeholder="Degree name" />
            <input type="text" placeholder="Degree name" />
            <input type="text" placeholder="Degree name" />
          </div>
          <div className="colTwo comp">
            <h4>Year Completed</h4>
            <input type="number" placeholder="Year" />
            <input type="number" placeholder="Year" />
            <input type="number" placeholder="Year" />
          </div>

          <div className="colThree comp">
            <h4>Institute</h4>
            <input type="text" placeholder="Institute name" />
            <input type="text" placeholder="Institute name" />
            <input type="text" placeholder="Institute name" />
          </div>
          <div className="colFour comp">
            <h4>Subjects</h4>
            <input type="text" placeholder="Field of Study e.g. Science" />
            <input type="text" placeholder="Field of Study e.g. Science" />
            <input type="text" placeholder="Field of Study e.g. Science" />
          </div>
        </div>
      </form>
    </div>
  )
}
