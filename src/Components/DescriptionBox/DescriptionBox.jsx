import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionBox'>
        <div className="descriptionBox-navigor">
            <div className="descriptionBox-navigor-box">
            Description
            </div>
            <div className="descriptionBox-navigor-box fade">
            review (112)
            </div>
        </div>
        <div className="descriptionBox-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Quibusdam facere asperiores dolores. Debitis consequuntur illo vitae odit velit obcaecati nobis tempore, dolorem quae laborum alias at placeat! Dolorem, deserunt dolores!
        </div>
    </div>
  )
}

export default DescriptionBox