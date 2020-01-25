const Contact = require('../modals/contact')

module.exports.list = (req,res) => {
    const { user, query } = req
    Contact.find({user: user._id}).skip(5 * (query.pageNumber - 1)).limit(5)
        .then((contacts) => {
            res.send(contacts)
        })
        .catch((err) => {
            res.send(err)
        })
}


module.exports.show = (req,res) => {
    const id = req.params.id
    const { user } = req
    Promise.all([Contact.findOne({_id: id, user: user._id}).select('name number email createdAt')])
        .then((values) => {
            const [contact] = values
            if(contact){
                const contactObj = contact.toObject()
              
                res.json(
                    {
                        ...contactObj
                    })
            }

            else{
                res.json({})
            }
            
        })
        .catch((err) => {
            res.send(err)
        })
}


module.exports.create = (req,res) => {
    const { body, user } = req
    body.user = user._id
    const contact = new Contact(body)
    contact.save()
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body, user } = req
    Contact.findOneAndUpdate({_id: id, user: user._id},body, {new: true, runValidators: true}).select('name number email createdAt')
        .then((contact) => {
            res.json(contact)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    const { user } = req
    Contact.findOneAndDelete({_id: id, user: user._id})
        .then((contact) => {
            if(contact){
                res.json(contact)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}