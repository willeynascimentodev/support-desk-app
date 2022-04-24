import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTicket, closeTicket, reset } from '../features/tickets/ticketSlice'
import { getNotes, createNote,  reset as notesReset } from '../features/notes/noteSlice'
import BackButton from '../components/BackButton'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import NoteItem from '../components/NoteItem'
import Modal from 'react-modal'

function Ticket() {
    const { ticket, isLoading, isSuccess, isError, message } = useSelector( (state) => state.tickets)

    const { notes, isLoading: notesIsLoading } = useSelector( (state) => state.tickets)

    const [modalIsOpen, setModelIsOpen] = useState(false)
    const [noteText, setNoteText] = useState('')

    const params = useParams()
    const dispatch = useDispatch()
    const { ticketId } = useParams()
    const navigate = useNavigate()

    const onTicketClose = () => {
        dispatch(closeTicket(ticketId))
        toast.success('Ticket closed')
        navigate('/tickets')
    }

    const onNoteSubmit = (e) =>{
        e.preventDefault()
        dispatch(createNote({ noteText, ticketId}))
    }

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        dispatch(getTicket(ticketId))
        dispatch(getNotes(ticketId))
    }, [isError, message, ticketId])

    if(isLoading || notesIsLoading) {
        return <p>Loading...</p>
    }

    if(isError) {
        return <h3>Something went wrong</h3>
    }
  return (
    <div className='ticket-page'>
        <header className="ticket-header">
            <BackButton url='/tickets' />
            <h2>
                Ticket ID: {ticket._id}
                <span className={`status status-${ticket.status}`}>{ ticket.status }</span>
            </h2>
            <h3>Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US') }</h3>
            <h3>Product: { ticket.product }</h3>
            <hr/>
            <div className="ticket-desc">
                <h3>Description of Issue</h3>
                <p>{ ticket.description }</p>
            </div>
            <h2>Notes</h2>
        </header>

        <form onSubmit={ onNoteSubmit }>
            <div className="form-group">
                <textarea 
                    name="noteText" 
                    id="noteText" 
                    className='form-control' 
                    placeholder='Note Text' 
                    value={ noteText } onChange={ (e) => setNoteText(e.target.value) }
                >
                        
                </textarea>
            </div>
            <div className="form-group">
                <button className="btn" type='submit'>Submit</button>
            </div>
        </form>
        
        { ticket.status !== 'closed' && (
            <button onClick={ onTicketClose } className="btn btn-block btn-danger">
                Close Ticket
            </button>
        )}
    </div>
  )
}

export default Ticket
