import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveContact } from '../../actions/contacts'

function List(props) {
    const handleRemove = (id) => {
        if(window.confirm('Are you Sure?')) {
            props.dispatch(startRemoveContact(id))
        }
    }

    return (
        <div className="container mt-5">
            <h2>Contacts - {props.contacts.length} </h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Number</th>
                    <th scope="col">E-Mail</th>
                    <th scope="col">Show</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.contacts.map((contact, index) => {
                            return (
                                <tr key={contact._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ contact.name }</td>
                                    <td>{ contact.number }</td>
                                    <td>{ contact.email }</td>
                                    <td><Link to={`/contacts/show/${contact._id}`} className="btn btn-primary">Show</Link></td>
                                    <td><Link to={`/contacts/${contact._id}`} className="btn btn-secondary">Edit</Link></td>
                                    <td><button className="btn btn-danger" onClick={ () => {
                                        handleRemove(contact._id)
                                    }} >Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/contacts/new">Add contact</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(List)