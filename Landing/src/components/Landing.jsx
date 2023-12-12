import React from 'react'
import rocket from '../assets/Rocket.jpg'

const Landing = () => {
  return (
    <div className=" font-sans h-screen flex items-center justify-evenly mx-20 ">
			
				<div className="text-left ">
					<h1 className="text-6xl font-semibold mb-4  ">
						Our Creativity Is Your <br />
						<span className="text-[#2e54d4]"> Success</span>
					</h1>
					<p className="text-xl mb-6 text-gray-500 ">
						Launch your campaign and benefit from our expertise on
						designing and <br />
						managing conversion centered bootstrap v5 html page.
					</p>
					<div className="flex space-x-4">
						<button className="bg-[#2e54d4] text-white text-xl px-4 py-2 rounded">
							Get Started
						</button>
						<button className=" text-blue-800 text-xl border-[#2e54d4] border-2 px-4 py-2 rounded">
							Documentation
						</button>
					</div>
				</div>
				<div className="px-8 ">
					<img
						src={rocket} // Replace with the actual path to your rocket illustration
						alt="Rocket Illustration"
						className="h-64"
					/>
				</div>
			
            </div>
  )
}

export default Landing