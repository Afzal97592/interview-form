import React from 'react'
import {Form, Button, Input, Select, } from 'antd'

const Asset = () => {
  return (
    <div>
    <Form labelCol={{ span: 8 }}
    wrapperCol={{ span: 8 }}
    onFinish = {(values)=>{
        console.log(values)
       }}
    >
    <Form.Item name='vhicel type' label = 'Vhicel Type:'
    rules={[
        { required: true, message: "Please Select Your Type"},
     ]}
     hasFeedback
    >
      <Select placeholder='Select Your Vhicel Type'>
        <Select.Option value= 'bike'>Bike</Select.Option>
        <Select.Option value= 'car'>Car</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item name='Vhicel Name' label = 'Vhicel Name:'
    rules={[
        { required: true, message: "Please Enter Your Vhicel Name"},
        { whitespace:true},
        { min:3},
        
     ]}
     hasFeedback
    >
      <Input placeholder='Type Your Email' />
    </Form.Item>
    <Form.Item name='model' label = 'Model No:' 
    rules={[
        { required: true, message: "Please Enter Your Mobile No"},
        { whitespace:true},
        { min:10},
        {max: 10}
     ]}
     hasFeedback
    >
      <Input placeholder='Type Your Model No' />
    </Form.Item>
    <Form.Item name='ammount' label = 'Showroom Ammount:' 
    rules={[
        { required: true, message: "Please Enter Your Showroom Ammount"},
        { whitespace:true},
        
     ]}
     hasFeedback
    >
      <Input placeholder='Type Your Address' />
    </Form.Item>
    <Form.Item name='dpayment' label = 'Down Payment:'
    rules={[
        { required: true, message: "Please Enter Your Dowen Payment Pan Number"},
        { whitespace:true},
     ]}
     hasFeedback >
      <Input placeholder='Type Your Down Payment' />
    </Form.Item>
  <Button type='primary' htmlType='submit'>Submit</Button>
    
    </Form>
   
    </div>
  )
}

export default Asset