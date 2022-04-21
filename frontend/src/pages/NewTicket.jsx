import { useState } from 'react'
import { useSelector } from 'react-redux'

function NewTicket() {
    const { user } = useSelector((state) => state.auth)
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')
    
    const onSubmit = (e) => {

    }

    return (
        <>
            <section className="heading">
                <h1>Create a new ticket</h1>
                <p>Plaease fill out the form bellow</p>
            </section>

            <section className="form">
                <div className="form-group">
                    <label htmlFor="name">Customer Name</label>
                    <input 
                        type="text" 
                        className='form-control'
                        value={ name }
                        disabled
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Customer Email</label>
                    <input 
                        type="text" 
                        className='form-control'
                        value={ email }
                        disabled
                    />
                </div>

                <form onSubmit={ onSubmit }>
                    <div className="form-group">
                        <label htmlFor="product">Product</label>
                        <select name="product" id="product" value={product} onChange={ (e) => setProduct(e.target.value) }>
                            <option value="Iphone">Iphone</option>
                            <option value="Macbook Pro">Macbook Pro</option>
                            <option value="iMac">iMac</option>
                            <option value="iPad">iPad</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description of the issue</label>
                        <textarea 
                            name="description" 
                            id="description" 
                            className='form-control'
                            placeholder='Description'
                            onChange={ (e) => setDescription(e.target.value) }
                            value={ description }
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>

            </section>
        </>
    )
}

export default NewTicket