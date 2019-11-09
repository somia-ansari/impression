import './BasicInfo.css';
import { Input } from 'antd';
import React from 'react'
const { TextArea } = Input;

export default function BasicInfo() {
  return (
    <div className="BasicInfo">
      <h1>Basic Information</h1>
      <form>
        <input required type="text" placeholder="Your full name here" />
        <input type="email" placeholder="Your email here" />
        <input type="number" placeholder="Your contact number here" />
        <input type="number" placeholder="Your WhatsApp number here" />
        <div style={{ marginBottom: 16 }}>
          <Input size="large" addonBefore="Http://" addonAfter=".com" defaultValue="Your LinkedIn profile url here" />
        </div>
        <TextArea size="large" rows={4} maxLength={80} placeholder="Your Residential Address here" allowClear={true} />
      </form >
    </div>
  )
}
