import React, {useRef} from 'react';
import '../../App.css';
import {Button} from '../Buttons';
import './IndexMainView.css';
import Navbar from '../Navbar/Navbar';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import decisionIcon from '../../images/icons/question-mark.svg';
import fastIcon from '../../images/icons/fast.svg';
import solutionIcon from '../../images/icons/puzzle.svg';
import AnimatedLetters from '../AnimatedLetters';

function IndexMainView() {

    const title1 = "Fast, reliable and";
    const title2 = "Efficient Sorting";
    const backgroundVideo = useRef(null);

    const onBackgroundEnd = () => {
        console.log("Video Ended");
        backgroundVideo.current.currentTime = 6.2;
        backgroundVideo.current.play();
    };

  return (
    <div className='hero-container'>
        <video ref={backgroundVideo} onEnded={onBackgroundEnd} src="../videos/robot3d.mp4" autoPlay muted></video>

        <Navbar delay={3}/>
        <div className="container-inner">
            <div>
                <AnimatedLetters className="motto-call" text={title1} delay={0.1} />
                <AnimatedLetters className="motto-call" text={title2} delay={0.1} />
            
            <p className="motto">Efficiency Multiplied by Speed equals ADA</p>
            </div>

            <div className="hero-buttons">
                <Button 
                    className="hero-btn hero-invest" t
                    o="/invest" 
                    buttonSize='btn--large' 
                    buttonStyle='btn--black'
                >Invest on us</Button>

                <Button 
                    className="hero-btn hero-features" 
                    to="/products" 
                    buttonSize='btn--large' 
                    buttonStyle='btn--white'
                >See all of our features</Button>
                
            </div>

            <div className="cardviews-container">
                <div className="cardview">
                    <div className="cardview-header">
                        <img src={solutionIcon} className='icon-explain' />
                        <OutboundOutlinedIcon fontSize='large' className='icon-action'/>
                    </div>
                    <div className="cardview-body">
                        <h1 className="title-carview">You book pick-ups, Robots will collect</h1>
                        <p className="context-cardview">
                            Advanced delivery robots: The Outdoor FoodRunner robots are a key component of the ADA system and the heart of the food donation collection process. Equipped with large storage capacity, navigation capabilities, and AI algorithms, these robots optimize collection routes for maximum efficiency and ensure timely and secure pickups.
                        </p>
                    </div>
                </div>
                <div className="cardview">
                    <div className="cardview-header">
                        <img src={solutionIcon} className='icon-explain' />
                        <OutboundOutlinedIcon fontSize='large' className='icon-action'/>
                    </div>
                    <div className="cardview-body">
                        <h1 className="title-carview">State-of-the-Art Centers for Optimal Food Categorization</h1>
                        <p className="context-cardview">
                        To maximize the usability of donated food and minimize waste, ADA establishes sorting centers equipped with Indoor FoodRunner robots. These advanced robots leverage robotics and AI technologies to sort and categorize donated food based on perishability, nutritional value, and suitability for different recipients
                        </p>
                    </div>
                </div>
                <div className="cardview">
                    <div className="cardview-header">
                        <img src={solutionIcon} className='icon-explain' />
                        <OutboundOutlinedIcon fontSize='large' className='icon-action'/>
                    </div>
                    <div className="cardview-body">
                        <h1 className="title-carview">User-Friendly Mobile App for Simple Food Donation Scheduling</h1>
                        <p className="context-cardview">
                        ADA will develop a user-friendly mobile application that allows individuals and businesses to schedule pickups for food donations. This application will seamlessly integrate with ADA's system, enabling efficient coordination and tracking of donations
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndexMainView