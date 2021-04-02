const knex = require ('../db')

// res = response from database
// before you touch anything please read https://zetcode.com/javascript/knex/ and look at DB.sql
// most of these functions can be copy pasted to make new functions just need to be edited to fit the table and columns you wish to affect
// my messages in the res.json might be inefficient and not really helping but i'll fix that in my universalCreate function at the bottom of the file

// I think this allows us to fetch account info i made it 4hrs ago and forget but that's what it looks like so imma go with that for now so it'd be for administrative purposes
exports.accountAll = async(req, res) => {
    knex('Account')
        .select('*')
        .from('Account')
        .then(userData => {
            res.json(userData)
        })
}

/*-------------------account Create/Delete/update-----------------------
creates a new row requires unique email will need to figure out when where or if we hash password
*/

exports.accountCreate = async (req,res) => {
    knex('Account')
        .insert({
            'name': req.body.name,
            'email': req.body.email,
            'password': req.body.password,
            'birthday': req.body.birthday
        })
        .then(() => {
            res.json({
                message: `${name} added successfully`,
                message: `${email} added successfully`,
                message: `${password} added successfully`,
                message: `${birthday} added successfully`,
            })
        })
        .catch(err => {
            res.json({
            message: `there was an error creating ${req.body.name} ${err}`,
            message: `there was an error creating ${req.body.email} ${err}`,
            message: `there was an error creating ${req.body.password} ${err}`,
            message: `there was an error creating ${req.body.birthday} ${err}`,})
        })
}

exports.accountUpdate = async (req,res) => {
    knex('Account')
        .where('id',req.body.id)
        .update({
            'name': req.body.name,
            'email': req.body.email,
            'password': req.body.password
        })
}

exports.accountDelete = async (req,res) => {
    knex('Account')
        .where('id', req.body.id)
        .del()
        .then(()=>{
            res.json({message: `Account ${req.body.id} deleted`})
        })
}

//-------------------pfp Create/update-----------------------

exports.pfpCreate = async (req,res) => {
    knex('Account')
        .insert({
            'pfp': req.body.pfp,
            
        })
        .then(() => {
            res.json({
                message: `${pfp} added successfully`,
            })
        })
        .catch(err => {
            res.json({
            message: `there was an error creating ${req.body.pfp} ${err}`,
})
        })
}

exports.pfpUpdate = async (req,res) => {
    knex('Account')
        .where('id',req.body.id)
        .update({
            'pfp': req.body.pfp,
        })
}

/*-------------------socials Create/update-----------------------
might add reset feature to return to null values
*/
exports.socialsCreate = async (req,res) => {
    knex('Account')
        .insert({
            'instagram': req.body.instagram,
            'twitter': req.body.twitter,
            'facebook': req.body.facebook
        })
        .then(() => {
            res.json({
                //messages
            })
        })
        .catch(err => {
            res.json({
                //messages
            })
        })
}

exports.socialUpdate = async (req,res) => {
    knex('Account')
        .where('id',req.body.id)
        .update({
            'instagram': req.body.instagram,
            'twitter': req.body.twitter,
            'facebook': req.body.facebook
        })
        .then(() => {
            res.json({
                //messages
            })
        })
        .catch(err => {
            res.json({
                //messages
            })
        })
}

/*-------------------bio Create/update-----------------------
no delete option may add reset for admin purposes only
*/
exports.socialsCreate = async (req,res) => {
    knex('Account')
        .insert({
            'instagram': req.body.instagram,
            'twitter': req.body.twitter,
            'facebook': req.body.facebook
        })
        .then(() => {
            res.json({
                //messages
            })
        })
        .catch(err => {
            res.json({
                //messages
            })
        })
}

exports.socialUpdate = async (req,res) => {
    knex('Account')
        .where('id',req.body.id)
        .update({
            'bio': req.body.bio,
        })
        .then(() => {
            res.json({
                //messages
            })
        })
        .catch(err => {
            res.json({
                //messages
            })
        })
}

/*-------------------post Create/delete-----------------------
creates new post and deletes post maybe update post if I figure out a good system for post id
will be virtually a copy paste for direct messaging if we meet the above issue and can improve upon it in time
-------------------post Create/delete-----------------------*/

exports.postCreate = async (req,res) => {
    knex('account')
        .where('id', req,body.id)
        .insert({
            'post': req.body.post
        })
        .then(() => {
            res.json({
                //messages
            })
        })
        .catch(err => {
            res.json({
                //messages
            })
        })
}

exports.accountDelete = async (req,res) => {
    knex('Account')
        .where('id', req.body.id)
        .del()
        .then(()=>{
            res.json({message: `Account ${req.body.id} deleted`})
        })
}

/*
        universal update, the "loop" function will work in all update create delete functions and tables
exports.universalCreate = async (req,res) => {
    knex('Account')
        .where( 'id', req.body.id)
        .update({
            ---------logic of the function-------
            ---------if you wanna try and figure it out-------            
            //parse user input into variable
            //remove columns if null
            //cycle through column
            //update new value
            ---------example-------
            .update({
            'name': req.body.name,
            'email': req.body.email,
            'password': req.body.password
            'instagram': req.body.instagram,
            'twitter': req.body.twitter,
            'facebook': req.body.facebook
                
            user input name is valid so name is checked in db and updated
            user input email is null skipped in db check
            user input password is null skipped in db check
            user input twitter is valid so twitter is checked in db and updated
            user input instagram is null skipped in db check
            user input facebook is null skipped in db check

            ---------end-------
        })
        })
        .then(()=> {
            res.json({message: 'placeholder'})
        })
        .catch(err=>{
            res.json({message: `there was an error creating ${req.body.name} ${err}`})
        })
}
*/