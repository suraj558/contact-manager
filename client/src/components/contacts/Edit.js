import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { startEditContact } from '../../actions/contacts'
import _ from 'lodash'

function Edit(props) {
    const handleSubmit = (contact) => {
        props.dispatch(startEditContact(contact, props))
    }
    return (
        <div className="container mt-5">
            <h2>Edit Contact</h2>
            {!_.isEmpty(props.contact) && <Form handleSubmit={handleSubmit} {...props.contact} />}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find(contact => contact._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(Edit)