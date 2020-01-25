import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

function Show(props) {
    return (
        <div className="container mt-5">
<h2>{ props.contact.name } - { props.contact.number } - {props.contact.email}</h2>
            <hr/>
            
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find(contact => contact._id === props.match.params.id) || {},
        
    }
}

export default connect(mapStateToProps)(Show)