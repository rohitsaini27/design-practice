import React from 'react'
import Label from './shared/label'
import TextIput from './shared/textinput'
import { useNavigate } from 'react-router-dom'

const FormInput = () => {
    const navigate = useNavigate()
    function handleSubmit() {
        navigate('/compatibility')
    }
  return (
    <>
    <div className='form'>
        <div className='subtitle-tab'>Subtitle</div>
        <div className='form-group'>
            <Label title='Name'/>
            <TextIput type='text' value="Name"/>
        </div>
        <div className='form-group'>
            <Label title='Name'/>
            <TextIput type='text' value="Name"/>
        </div>
        <div className='form-group'>
            <Label title='Name'/>
            <TextIput type='text' value="Name"/>
        </div>
        <div className='form-group'>
            <Label title='Name'/>
            <TextIput type='text' value="Name"/>
        </div>
        <div className='form-group'>
            <Label title='Name'/>
            <TextIput type='text' value="Name"/>
        </div>
    </div>
    <div>
        <button className='button' onClick={handleSubmit}>GET COMPATIBILITY</button>
    </div>
    </>
  )
}

export default FormInput