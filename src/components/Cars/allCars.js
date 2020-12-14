import React from 'react';
import './allCars.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCars = () => {

    // const [car, setCar] = useState({ year: '', make: '', model: '', style: '', price: '', image: '' });
    // const [randomCar, setRandomCar] = useState({ year: '', make: '', model: '', style: '', price: '', image: '' });

    // useEffect(() => {
    //     const getCars = async () => {
    //         try {
    //             const res = await axios.get('/api/allCars')
    //             setCar(res.data)
    //         }
    //         catch (err) {
    //             console.log(err.response.request.response)
    //         }
    //     }
    //     getCars()
    // }, [])

    // useEffect(() => {
    //     const getRandomCar = async () => {
    //         try {
    //             const res = await axios.get('/api/randomCar')
    //             setRandomCar(res.data)
    //         }
    //         catch (err) {
    //             console.log(err.response.request.response)
    //         }
    //     }

    //     getRandomCar()
    // }, [])

    // const { year, make, model, style, price, image } = car
    // const { year, make, model, style, price, image } = randomCar

    const carInfo = [
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-ford-f150-raptor-2-1601920336.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Ford', model: 'Raptor', price: '$53,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-gti-rabbit-edition-medium-9342-1601920322.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Volkswagon', model: 'GTI', price: '$29,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-honda-civic-hatchback-sport-touring-014-source-1601920324.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Honda', model: 'Civic', price: '$25,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ch021-098pfacpviap2aed73nmf6k7vpu04b9-1601920334.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Chrysler', model: 'Pacifica', price: '$34,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-chevrolet-corvette-stingray-240-1601920346.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Chevrolet', model: 'Corvette', price: '$58,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/16c1112-021-source-1601920321.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Mercedes', model: 'MAG GT R', price: '$163,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-honda-ridgeline-1200x800-1601920342.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Honda', model: 'Ridgeline', price: '$34,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dg021-069clqa30j71rrmo7dgl3ios5cn91ed-1601920327.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Dodge', model: 'Challenger', price: '$35,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/corolla-hybrid-006-1d89ab269232d6533cbd4704225d122e9fb1735e-1601920335.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Toyata', model: 'Corrolla Hybrid', price: '$23,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-mazda-mx-5-1601920348.jpeg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Mazda', model: 'Miata MX-5', price: '$27,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-cx-5-09-1-1601920338.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Mazda', model: 'CX-5', price: '$31,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wdmp-190507-02584-1601920335.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Ford', model: 'Mustang GT350', price: '$60,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mdp7359-1589431361.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Ferrari', model: 'F8 Tributo', price: '$276,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90298653-highres-the-new-bmw-m2-compe-1601920325.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'BMW', model: 'M2 Competion', price: '$59,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-5459-2019audiq8-1601920347.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Audi', model: 'Q8', price: '$68,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-37397-2020velostern-1601920336.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Hyundai', model: 'Veloster N', price: '$28,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-nissan-gt-r-nismo-17-source-source-1601920338.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Nissan', model: 'GT-R', price: '$113,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rm019-084fn-1601920344.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'RAM', model: '1500', price: '$33,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20my-sti-7v2-1601920344.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Subaru', model: 'WRX STI', price: '$37,000' },
        { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p20-0375-a3-rgb-1594844268.jpg?crop=1xw:1xh;center,top&resize=980:*', year: '2020', make: 'Porsche', model: '911', price: '$99,000' },
    ]


    const renderCar = (card, index) => {
        return (

            <Card className='box' style={{ width: '18rem' }} key={index} >
                <Card.Img src={card.image} />
                <Card.Body>
                    <Card.Title > {card.year} {card.make} {card.model}
                        <br />
                        {card.price}
                    </Card.Title>
                    <Card.Text> </Card.Text>

                </Card.Body>
                <Link to='/this-car'><button className='card-btn card-btn-details'>Details</button></Link>
                <Link to='/fav'><button className='card-btn card-btn-favorites'>Add to Favorites</button></Link>
            </Card>
        )
    }

    return (
        <div>
            <h1 className='header-piece'> Here is our full Inventory of cars at Auto Emporium</h1>
            
            <div className='grid'>{carInfo.map(renderCar)}</div>
        </div>

    )
}

export default AllCars;