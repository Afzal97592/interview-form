import React from 'react'
import {Form, Button, Input, Select, } from 'antd'


const BankInfo = () => {
  return (
    <div>
    <Form labelCol={{ span: 8 }}
    wrapperCol={{ span: 8 }}
    onFinish = {(values)=>{
        console.log(values)
       }}
    >
    <Form.Item name='Account No' label = 'Account No:'
    rules={[
        { required: true, message: "Please Enter Account No"},
           { whitespace:true},
           { min:4},
           
        ]}
        hasFeedback
    >
      <Input placeholder='Type Your Account Number' />
    </Form.Item>
    <Form.Item name='Account Type' label = 'Select Your Account'
    rules={[
        { required: true, message: "Please Select Your Account Type"},
        
        ]}
        hasFeedback
    >
    <Select placeholder='Select Your Account Type'>
      <Select.Option value='saving'>Saving Account</Select.Option>
      <Select.Option value='current'>Current Account</Select.Option>
    </Select>
    </Form.Item>
    <Form.Item name='IFSC Code' label = 'IFSC Code:'
    rules={[
        { required: true, message: "Please Enter IFSC Code"},
           { whitespace:true},
           { min:4},
           
        ]}
        hasFeedback
    >
      <Input placeholder='Type Your IFSC Code' />
    </Form.Item>
    <Form.Item name='Branch Name' label = 'Branch Name:'
    rules={[
        { required: true, message: "Please Enter Branch Name"},
           { whitespace:true},
           { min:4},
           
        ]}
        hasFeedback
    >
    <Input placeholder='Enter Your Branch Name' />
    </Form.Item >
    <Form.Item name='Address' label = 'Address:' 
    rules={[
        { required: true, message: "Please Enter Address"},
           { whitespace:true},
           { min:4},
           
        ]}
        hasFeedback
    >
      <Input placeholder='Type Your Address' />
    </Form.Item>
    <Form.Item name='name' label = 'Pin Number:' 
    rules={[
        { required: true, message: "Please Enter Pin No"},
           { whitespace:true},
           { min:4},
           
        ]}
        hasFeedback>
      <Input placeholder='Type Your Pin Number' />
    </Form.Item>

    {/*<Link to='/asset'><Button type='primary' htmlType='submit'>Next</Button></Link>*/}
    <Button type='primary' htmlType='submit'>Next</Button>
    </Form>
    </div>
  )
}

export default BankInfo