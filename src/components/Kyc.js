import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Form, fileList, Upload} from 'antd'


const Kyc = () => {
  return (
    <div>
    
    <Form autoComplete='off'  
    
       onFinish = {(values)=>{
        console.log(values)
       }}
   >
     <Form.Item name='Upload Photo'
     rules={[
        { required: true, message: "Please Upload Your Adhaar"},
     ]}
     hasFeedback >
     <Upload placeholder ='upload photo' listType='picture-card' style={{fontSize:'20px'}} >+ Upload Adhaar</Upload>
     </Form.Item>
     
     <Form.Item name='Upload Photo' >
     <Upload placeholder ='upload photo' listType='picture-card' style={{fontSize:'20px'}} >+ Upload Pan-Card</Upload>
     </Form.Item>
    </Form>

    {/*<Link to='/asset'><Button type='primary' htmlType='submit'>Next</Button></Link>*/}
    <Button type='primary' htmlType='submit'>Next</Button>
    </div>
  )
}

export default Kyc