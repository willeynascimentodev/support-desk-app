import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { name, email, password, password2 } = formData

    const dispatch = useDispatch()

    const { user, isLoading, isSuccess, message } = useSelector( 
        (state) => state.auth    
    )


    const onChange = (e) => {
        setFormData( (prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))

    }
    return (
        <>
        <section className="heading">
            <h1>
                <FaSignInAlt /> Register
            </h1>
            <p>Please login</p>
        </section>

        <section onSubmit= { onSubmit } className="form">
            <form>
 
                <div className="form-group">
                    <input 
                        type="email" 
                        className='formControl' 
                        id='email' 
                        name='email'
                        value={ email }
                        onChange={ onChange }
                        placeholder="Your email"
                        required
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="password" 
                        className='formControl' 
                        id='password' 
                        name='password'
                        value={ password }
                        onChange={ onChange }
                        placeholder="Enter password"
                        required
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-block">Submit</button>
                </div>
                
            </form>
        </section>
        </>
    )
}

export default Login