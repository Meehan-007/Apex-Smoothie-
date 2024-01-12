import React from 'react';
import { Link } from 'react-router-dom';

import calories from '../assests/Calories.webp'
import fat from '../assests/Fat.webp'
import protein from '../assests/Protein.jpg'
import carbs from '../assests/Carbs.jpg'



const SmoothieFooter = () => {


    return (
        <section className='pink w-100'>

            <section className='space_center col'>
                <section className='row space_evenly center col-6'>
                    <div className='col space_around'>
                        <img className='circle imagesize_large' src={calories} alt="calories picture" />
                        <h3> 680 </h3>
                        <p> calories </p>
                    </div>
                    <div className='col space_around'>
                        <img className='circle imagesize_large' src={fat} alt="calories picture" />
                        <h3> 32g </h3>
                        <p> fat </p>
                    </div>
                    <div className='col space_around'>
                        <img className='circle imagesize_large' src={protein} alt="calories picture" />
                        <h3> 98g </h3>
                        <p> carbs </p>
                    </div>
                    <div className='col space_around'>
                        <img className='circle imagesize_large' src={carbs} alt="calories picture" />
                        <h3> 16g </h3>
                        <p> Protein </p>
                    </div>
                </section>

                <section className='row space_evenly col-6'>
                    <div className='col space_evenly'>
                        <div className='row space_around'>
                            <p> calories </p>
                            <p> 32g </p>
                        </div>

                        <div className='row space_around'>
                            <p> calories </p>
                            <p> 32g </p>
                        </div>

                        <div className='row space_around'>
                            <p> calories </p>
                            <p> 32g </p>
                        </div>
                    </div>



                    <div className='col space_evenly'>
                        <div className='row space_around'>
                            <p> calories </p>
                            <p> 32g </p>
                        </div>

                        <div className='row space_around'>
                            <p> calories </p>
                            <p> 32g </p>
                        </div>

                        <div className='row space_around'>
                            <p> calories </p>
                            <p> 32g </p>
                        </div>
                    </div>
                </section>

            </section>
        </section>
    );
};

export default SmoothieFooter;