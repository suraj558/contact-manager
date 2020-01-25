import React from 'react'
import { connect } from 'react-redux'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name || '',
            number: props.number || '',
            email: props.email || ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email
        }
        this.props.handleSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Number</label>
                    <input type="mobile" className="form-control" id="number" placeholder="Number" name="number" value={this.state.number} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

export default connect()(Form)