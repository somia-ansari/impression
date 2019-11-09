import './Buttons.css';
import React from 'react'
import { Button } from 'antd';
// import { saveAs, FileSaver } from 'file-saver';
import "antd/dist/antd.css";


export default function Buttons() {

  return (
    <div className="Buttons">
      <Button
        type="primary" icon="download" size="large"
        onClick={() => {
          var FileSaver = require('file-saver');
          var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
          FileSaver.saveAs(blob, "my cv.txt");
        }}>
        Download
      </Button>
    </div>
  )
}




