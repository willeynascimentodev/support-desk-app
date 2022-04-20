import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'

function Home() {
    return (
        <>
            <section className="heading">
                <h1>What do you need help with</h1>
                <p>Please choose form a option below</p>
            </section>

            <div>
                <Link to='/new-ticket' className='btn btn-reverse btn-block'> Create New Ticket </Link>
                <Link to='/new-ticket' className='btn btn-reverse btn-block'> View My Tickets </Link>
            </div>
        </>
    )
}

export default Home