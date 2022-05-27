import React from 'react'
import "./scrollDown.css";

function ScrollDownArrow({scrollRef}) {
    return (
        <div id="section05" className="demo">
  <a href={`${scrollRef}`}><span></span></a>
</div>
    )
}

export default ScrollDownArrow

