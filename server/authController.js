const bcrypt = require('bcrypt');

module.exports = {

    register: async (req, res) => {

        const db = req.app.get('db');
        const { email, password } = req.body;

        try {
            const [foundUser] = await db.find_email(email);
            if (foundUser) {
                return res.status(401).send('User already exists');
            }

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const [newUser] = await db.new_user([email, hash]);

            req.session.user = {
                id: newUser.user_id,
                email: newUser.email
            }
            res.status(200).send(req.session.user);
        }
        catch (err) {
            console.log('Error on register function', err)
        }
    },

    login: async (req, res) => {

        const db = req.app.get('db');
        const { email, password } = req.body;

        try {
            const [foundUser] = await db.find_email(email);
            if (!foundUser) {
                return res.status(401).send("Login credentials incorrect")
            }
            console.log(foundUser)

            const authenticated = bcrypt.compareSync(password, foundUser.password)
            console.log(authenticated)
            if (!authenticated) {
                return res.status(401).send("Invalid email or password.")
            }
            req.session.user = {
                id: foundUser.user_id,
                email: foundUser.email
            }
            console.log(req.session.user)
            return res.status(200).send(req.session.user)
        }
        catch (err) {
            console.log('Error on login function', err)
            res.status(404).send(err)
        }

    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
};