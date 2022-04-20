import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../features/auth/authSlice'

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
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



        if(password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email, 
                password
            }

            dispatch(register(userData))
        }
    }
    return (
        <>
        <section className="heading">
            <h1>
                <FaUser /> Register { user }
            </h1>
            <p>Please create an account</p>
        </section>

        <section onSubmit= { onSubmit } className="form">
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className='formControl' 
                        id='name' 
                        name='name'
                        value={ name }
                        onChange={ onChange }
                        placeholder="Your name"
                        required
                    />
                </div>
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
                    <input 
                        type="password2" 
                        className='formControl' 
                        id='password2' 
                        name='password2'
                        value={ password2 }
                        onChange={ onChange }
                        placeholder="Confirm password"
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

export default Register