import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleRegistration = async (e) => {
        e.preventDefault()
        setLoading(true)

        const userData = {
            username: userName,
            email: email,
            password: password,
        }

        try{
            const response = await Axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            setErrors({})
            setSuccess(true)
            navigate('/login')
        }catch (error) {
            if (error.response) {
                setErrors(error.response.data);
                console.log(error.response.data);
            } else {
                console.log(error.message);
            }
        }finally {
            setLoading(false)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light-dark p-5 rounded">
                        <h3 className="text-light text-center mb-4">
                            Create An Account
                        </h3>
                        <form onSubmit={handleRegistration}>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='User Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
                                <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                            </div>

                            <div className="mb-3">
                                <input type="email" className='form-control' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <input type="password" className='form-control' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                            </div>
                            {success && <div className='alert alert-success'>Registration Successful</div>}
                            {loading ? (
                                <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin />Please wait...</button>
                            ) : (
                                <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register