import React, { useState, useContext } from 'react'
import './signin.css'
import movieContext from '../../context/Movie/movieContext'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const context = useContext(movieContext)
    const { handleOnChange } = context
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const onClicSubmit = () => {
        if (userName !== 'osama' || password !== '123') {
            return
        }
        handleOnChange(true)
        navigate('/explore')
    }
    return (
        <>

            <div className="sigin-in">
                <div className="input-box">
                    <h2 className='heading'>Sign In</h2>
                    <div className="sub-input">
                        <input type="text" className='input-link' value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <input type="password" className='input-link' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="btn">
                        <button className='btn-input' onClick={onClicSubmit}>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn