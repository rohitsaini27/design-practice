import React from 'react'
import Navbar from '../components/navbar'
import FormInput from '../components/formInput'
import Avatar from '../components/shared/avatar'
import leftarrow from '../assets/icons/arrow-left.png'
import avatarImg from '../assets/icons/avatar.png'

const Home = () => {
  return (
    <div className='container'>
    <div className='header'>
        <div className='icon'>
        <span><img src={leftarrow} alt='leftarrow'/></span>
        </div>
        <p>Compatibility Check</p>
        <Avatar src={avatarImg} alt='avatar'/>
    </div>
    <FormInput/>   
    <Navbar/>
    </div>
  )
}

export default Home