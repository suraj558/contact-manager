import axios from "../config/axios"

export const setContacts = (contacts) => {
    return {
        type: 'SET_CONTACTS',
        payload: contacts
    }
}

export const startSetContacts = () => {
    return (dispatch) => {
        axios.get('/contacts', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                const contacts = response.data
                dispatch(setContacts(contacts))
            })
            .catch((err) => {
                window.alert(err)
            })
    }   
}

export const addContact = (contact) => {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

export const startAddContact = (formData, props) => {
    return (dispatch) => {
        axios.post('/contacts', formData, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.message) {
                    window.alert(response.data.message)
                } else {
                    dispatch(addContact(response.data))
                    props.history.push('/contacts')
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }   
}

export const editContact = (contact) => {
    return {
        type: 'EDIT_CONTACT', 
        payload: contact
    }
}

export const startEditContact = (formData, props) => {
    return (dispatch) => {
        axios.put(`/contacts/${props.match.params.id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.message) {
                    window.alert(response.data.message)
                } else {
                    dispatch(editContact(response.data))
                    props.history.push('/contacts')
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}

export const removeContact = (id) => {
    return {
        type: 'REMOVE_CONTACT',
        payload: id
    }
}

export const startRemoveContact = (id) => {
    return (dispatch) => {
        axios.delete(`/contacts/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                dispatch(removeContact(id))
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}