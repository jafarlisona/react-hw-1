import { faCity, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./index.css"

const FeaturesCard = (props) => {
  return (
   <>
    <div className='features-card'>
        <div className="features-icon">
            <FontAwesomeIcon icon={faCity} fontSize={"20px"} color='white'/>
        </div>
        <div className="features-text">
            <span>Featured title</span>
            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
        </div>
    </div>
    <div className='features-card'>
        <div className="features-icon">
            <FontAwesomeIcon icon={faCity} fontSize={"20px"} color='white'/>
        </div>
        <div className="features-text">
            <span>Featured title</span>
            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
        </div>
    </div>
    <div className='features-card'>
        <div className="features-icon">
            <FontAwesomeIcon icon={faToggleOff} fontSize={"20px"} color='white'/>
        </div>
        <div className="features-text">
            <span>Featured title</span>
            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
        </div>
    </div>
    <div className='features-card'>
        <div className="features-icon">
            <FontAwesomeIcon icon={faToggleOn}fontSize={"20px"} color='white' />
        </div>
        <div className="features-text">
            <span>Featured title</span>
            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
        </div>
    </div>
   </>
  )
}

export default FeaturesCard