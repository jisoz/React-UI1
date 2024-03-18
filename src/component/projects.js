import React from 'react';
import { Link } from 'react-router-dom';
import './project.css'
import image1 from '../photos/design1.jpg'
import image2 from '../photos/design2.jpg'
import image3 from '../photos/design3.jpg'
import image4 from '../photos/design4.jpg'
import image5 from '../photos/design5.jpg'
import image6 from '../photos/design6.jpg'
export default function Projects() {
  return (
      <div className='proj'>
    <div className='container'>
    <div className='row'>
        <div className='col-4 one'>
        <div className='title'>EVERY PROJECT</div>
        <div className='is'>IS A CHALLENGE TO DO BETTER</div>
        <div className='lead'>We are a team of talented designers and developers who are ready to guide our clients through the flawless and timely execution of any web design project. Since day one, we have been delivering creative and unique websites to our clients worldwide</div>

        <Link to='/about' className='link'>READ MORE ABOUT US</Link>
        <div className='bot'>OUR AWARDS</div>
        </div>
        <div className='col-4 two'>
            <div>As a leading web design team, we have received multiple awards over the years.</div>
        </div>
        <div className='col-4 three'>
            <div className='cadre'>
                <div className='cadre1'><img id='one' src={image1}></img>
                <img src={image2} id='two'/>
                </div>
                <div className='cadre2'> <img src={image3} id='one'></img>
                <img src={image4} id='two'></img>
                </div>
                <div className='cadre3'><img src={image5} id='one'></img>
                
                <img src={image6} id='two'></img>
                </div>
               
            </div>
        </div>

    </div>
    </div>
    </div>

  );
}
