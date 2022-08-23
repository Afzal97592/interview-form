import React from 'react'
import {Form, Button, Input, } from 'antd'
import './Personal.css';


const PersonalInfo = () => {
  return (
    <div className='personal_info'>
       <Form autoComplete='off' labelCol={{ span: 8 }}
       wrapperCol={{ span: 8 }}
       onFinish = {(values)=>{
        console.log(values)
       }}
       >
         <Form.Item name='Name' label = 'Full Name:'
          rules={[
           { required: true, message: "Please Enter Your FullName"},
           { whitespace:true},
           { min:3}
        ]}
        hasFeedback
         >
           <Input placeholder='Type Your Name' />
         </Form.Item>
         <Form.Item name='Email' label = 'Email:'
         rules={[
            { required: true, message: "Please Enter Your Email"},
            {type:"email"},
         ]}
         hasFeedback
         >
           <Input placeholder='Type Your Email' />
         </Form.Item>
         <Form.Item name='Password' label = 'Password:'
         rules={[
            { required: true},
            { min:8},
            {max: 16}
         ]}
         hasFeedback
         >
           <Input.Password placeholder='Type Your Password' />
         </Form.Item>
         <Form.Item name='Pan Number' label = 'Pan Number:' 
         rules={[
            { required: true, message: "Please Enter Your Pan Number"},
            { whitespace:true},
            { min:10},
            {max: 10}
         ]}
         hasFeedback>
           <Input placeholder='Type Your Pan' />
         </Form.Item>
         <Form.Item name='Adhaar No' label = 'Adhaar Number:' 
         rules={[
            { required: true, message: "Please Enter Your Adhaar"},
            { whitespace:true},
            { min:12},
            {max: 12}
         ]}
         hasFeedback
         >
           <Input placeholder='Type Your Adhaar' />
         </Form.Item>
         <Form.Item name='Address' label = 'Address:' 
         rules={[
         { required: true, message: "Please Enter Your Address"},
            { whitespace:true},
            
         ]}
         hasFeedback
         >
           <Input placeholder='Type Your Address' />
         </Form.Item>
         <Form.Item name='Mobile No' label = 'Mobile No:'
         rules={[
            { required: true, message: "Please Enter Your Adhaar"},
               { whitespace:true},
               { min:10},
               {max: 10}
            ]}
            hasFeedback
         >
           <Input placeholder='Type Your Mobile No' />
         </Form.Item>
         <Form.Item name='City Name' label = 'City Name:'
         rules={[
            { required: true, message: "Please Enter Your Adhaar"},
               { whitespace:true},
               { min:3},
               
            ]}
            hasFeedback
         >
           <Input placeholder='Type Your City Name' />
         </Form.Item>
         <Form.Item name='pin' label = 'Pin Number:'
         rules={[
            { required: true, message: "Please Enter Your Adhaar"},
               { whitespace:true},
               { min:4},
               {max: 15}
            ]}
            hasFeedback
         >
           <Input placeholder='Type Your Pin Number' />
         </Form.Item>
         
        {/*<Link to='/asset'><Button type='primary' htmlType='submit'>Next</Button></Link>*/}
        <Button type='primary' htmlType='submit'>Next</Button>
       </Form>
    </div>
  )
}

export default PersonalInfo