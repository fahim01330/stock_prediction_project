import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        const userData = {
            username: userName,
            password
        }

        try {
            const response = await Axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
            console.log(response.data)
        }catch(error) {
            console.log(error.response.data)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light-dark p-5 rounded">
                        <h3 className="text-light text-center mb-4">
                            Login to our Portal
                        </h3>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='User Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <input type="password" className='form-control' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {loading ? (
                                <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin />Login in...</button>
                            ) : (
                                <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login