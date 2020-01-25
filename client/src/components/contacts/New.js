import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { startAddContact } from '../../actions/contacts'

function New(props) {
    const handleSubmit = (contact) => {
        props.dispatch(startAddContact(contact, props))
    }
    return (
        <div className="container mt-5">
            <h2>Add Contact</h2>
            <Form handleSubmit={handleSubmit} />
        </div>
    )
}

export default connect()(New)