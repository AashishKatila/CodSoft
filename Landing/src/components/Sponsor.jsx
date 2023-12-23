import React from 'react'
import google from "../assets/google.png";
import shopify from "../assets/shopify.png";
import lenovo from "../assets/lenovo.png";
import acer from "../assets/acer.png";
import paypal from "../assets/paypal.png";
import amazonPay from "../assets/amazon-pay.png";

const Sponsor = () => {
    const companies = [
		{ name: "Google", logo: google },
		{ name: "Shopify", logo: shopify },
		{ name: "Lenovo", logo: lenovo },
		{ name: "Acer", logo: acer },
		{ name: "Paypal", logo: paypal },
		{ name: "AmazonPay", logo: amazonPay },
	];
  return (
    <div className=" pb-20">
				<div className="flex justify-center items-center">
					{companies.map((company) => (
						
						<div className="h-10 mx-4 " key={company.name}>
							<img
								src={company.logo}
								alt={company.name}
								className="grayscale"
							/>
					
						</div>
					))}
				</div>
			</div>
  )
}

export default Sponsor