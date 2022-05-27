import React from 'react'
import ScrollDownArrow from './scrollDown/ScrollDownArrow'
import WaslaLogo from './WaslaLogo'

function LandingPage() {
    return (
        <section className="h-screen py-6 main relative snapper">
        <div className="w-full text-center absolute top-12 mx-auto">
          <div className="w-1/2 mx-auto">
            <WaslaLogo></WaslaLogo>
            </div>
      
          <div
            className="w-full flex flex-col mx-auto text-center"
          >
            <div className="p-3">
              <h1 className="text-8xl text-primary font-medium">وصلة</h1>
            </div>
            <div>
              <h2 className="text-secondary text-lg mb-2">
                بكل مكان راحة وامان
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-3.5 w-full text-center">
          <ScrollDownArrow scrollRef="#scrollAid" />
        </div>
      </section>
    )
}

export default LandingPage
