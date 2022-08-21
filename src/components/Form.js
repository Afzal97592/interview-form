import React from 'react'
import './form.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import PersonalInfo from './PersonalInfo'
import BankInfo from './BankInfo'
import Kyc from './Kyc'
import Asset from './Asset'

const Form = () => {
  return (
    <div className='form'>
    <div className="header1">
    <nav>
    <ul>
      <li><a href="/">Personal Info</a></li>
      <li><a href="/bank">Bank Info</a></li>
      <li><a href="/kyc">KYC Info</a></li>
      <li><a href="/asset">Asset Info</a></li>
      </ul>
      </nav>    
    <BrowserRouter >
    <Routes>
  
     <Route path = '/' element ={<PersonalInfo />} value = 'Home'/>
     <Route path='/bank' element= {<BankInfo />} value = 'Bank' />
     <Route path='/kyc' element = {<Kyc />} />
     <Route path='/asset' element = {<Asset />} />
    </Routes>
    </BrowserRouter>
     
      </div>
    </div>
  )
}

export default Form