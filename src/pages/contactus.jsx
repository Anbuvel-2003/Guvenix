import React from 'react'
import contactUs from "../assets/aboutus2.png";

function Contactus() {
    return (
        <div className="lg:!mt-10 md:!mt-10 !mt-15">
            <div className="w-full !mb-10">
                <img src={contactUs} alt="" className="object-contain" />
            </div>
        </div>
    )
}

export default Contactus