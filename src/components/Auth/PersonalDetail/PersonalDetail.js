import React from "react";
import '../PersonalDetail/PersonalDetail.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, DatePicker} from 'antd';



export default function PersonalDetail() {
  
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };
  
  const onFinish = fieldsValue => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
      'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
      'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
      'range-time-picker': [
        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      ],
      'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
    console.log('Received values of form: ', values);
  }

  return (
    <div>
      <div className="full__container">
        <div className="container__left">
          <img src={require("../../../assets/user/user1.jpg")} alt="logo" />
          <h3>Adityo S. Nento</h3>
          <p>Investor</p>
          <div className="subclass__nav">
              <h4>Profile</h4>
              <h4>Password</h4>
              <h4>Address</h4>
          </div>
        </div>
        <div className="container__right">
          <div className="container__right__top">
          <h1>Your Details</h1>
          <p>Details will be saved to streamline future Investment</p>
          </div>
          <div className="container__right__bottom">
             <div className="container__title__profile">
             <FontAwesomeIcon className="iconawesome" icon="user-edit" />
             <h4>Profile</h4>
             </div>
             <div className="display__flex">
    <form>
    
    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Adityo S. Nento</label>
    </div>
      
    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>adityosnento11@gmail.com</label>
    </div>

    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>+6282194281585</label>
    </div>
    
  </form>
  

      <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
      <Form.Item name="date-picker" {...config}>
        <DatePicker />
      </Form.Item>
      </Form>
    
             </div>

             <div className="container__title__profile">
             <FontAwesomeIcon className="iconawesome" icon="map-marker-alt" />
             <h4>Location</h4>
             </div>
             <div className="display__flex">
    <form>

    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Indonesia</label>
    </div>
    
    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Gorontalo</label>
    </div>
      
    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>JL. Sultan Botutihe No.54</label>
    </div>

    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>76112</label>
    </div>
    
  </form>
 </div>
          </div>
        
          <div className="container__right__bottom2">
             <div className="container__title__profile">
             <FontAwesomeIcon className="iconawesome" icon="key" />
             <h4>Password</h4>
             </div>
             <div className="display__flex">
    <form>
    
    <div class="group">      
      <input type="password" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Password</label>
    </div>
      
    <div class="group">      
      <input type="password" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Password Confirmation</label>
    </div>    
  </form>
             </div>
             </div>
      
          
        </div>
      </div>
    </div>
  );
}
