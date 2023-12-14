import React from 'react'
import work from '../assets/work.png'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Works = () => {
  return (
    <div className=" bg-gray-100 pb-20">
				<div className=" flex flex-col h-2/6 items-center py-10 my-10 mb-20 ">
					<div className="text-5xl font-semibold my-6 tracking-wider ">
						How It Works?
					</div>
					<div className="text-gray-500 text-xl text-center">
						Start working with,
						<span className="text-[#2e54d4]"> heroes</span> that
						can provide everything you need to
						<br />
						generate awareness, drive traffic, connect.
					</div>
				</div>

				<div className=" h-4/6  mx-20 mt-10 ">
					<div className="flex mx-20 justify-evenly mt-10">
						<div className="mx-10  ">
							<img
								src={work} 
								alt="Working Illustration"
								className="h-96 object-contain"
							/>
						</div>
						<div className="text-left ml-60  ">
							<h1 className="text-5xl font-semibold mb-4  ">
								Change the way you build websites
							</h1>
							<p className="text-xl mb-6 text-gray-500 ">
								You can combine all the heros templates into
								a single one, you can take a<br /> component
								from the Application theme and use it in the
								<ul className="mt-5">
									<li className="flex items-center ">
										<IoIosCheckmarkCircleOutline
											className="mr-5"
											color="#3061dd"
										/>{" "}
										Digital Marketing Solutions for Tomorrow
									</li>
									<li className="flex items-center ">
										<IoIosCheckmarkCircleOutline
											className="mr-5"
											color="#3061dd"
										/>{" "}
										Our Talented & Experienced Marketing
										Agency
									</li>
									<li className="flex items-center ">
										<IoIosCheckmarkCircleOutline
											className="mr-5"
											color="#3061dd"
										/>{" "}
										Create your own skin to match your brand
									</li>
								</ul>
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
					</div>
				</div>
			</div>
  )
}

export default Works