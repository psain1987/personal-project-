const bcrypt = require('bcrypt');

module.exports = {

    register: async (req, res) => {

        const db = req.app.get('db');
        const { email, password } = req.body;

        try{
        const [foundUser] = await db.find_email(email);
        if (foundUser) {
            return res.status(401).send('User already exists');
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newUser] = await db.new_user([email, hash]);
        req.session.user = {
            id: newUser.id,
            email: newUser.email
        }
        res.status(200).send(req.session.user);
    }
        catch(err){
            console.log('Error on register function', err)
        }
    },

    login: async (req, res) => {

        const db = req.app.get('db');
        const { email, password } = req.body;

        try{
        const [foundUser] = await db.find_email(email);
        if (!foundUser) {
            return res.status(401).send("Login credentials incorrect")
        }

        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if(authenticated){
            req.session.user = {
                id: foundUser.id,
                email: foundUser.email
            }
            res.status(200).send(req.session.user)
        } 
    }
        catch(err){
            console.log('Error on login function', err)
        }
           
        
        
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
};