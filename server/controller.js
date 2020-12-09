

module.exports = {
    
    getRandomCar: async (req, res) => {

        const db = req.app.get('db')
        const [randomCar] = await db.random_car();
        res.status(200).send(randomCar)
        
    },
    getAllCars: async (req, res) => {

        const db = req.app.get('db')
        const allCars = await db.all_cars();
        res.status(200).send(allCars)
    },
    getOneCar: async (req, res) => {

        const db = req.app.get('db')
        const {id} = req.params;
        const [cars] = await db.get_one_car(+id);
        if(cars){
            res.status(200).send(cars)
        }else {
            res.status(404).send("Couldn't find anything")
        }
    },
    getFavCar: (req, res) => {

        const db = req.app.get('db')
    },
    noteMaker: (req, res) => {

        const db = req.app.get('db')
    },
    deleteCar: (req, res) => {

        const db = req.app.get('db')
    },
    
    
}