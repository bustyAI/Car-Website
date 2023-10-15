"use client";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find Your Dream Car Today – fast and easy!
                </h1>

                <p className="hero__subtitle">
                    Booking a car never has never been this easy.
                </p>
                {/* Custom button with props */}
                <CustomButton
                    title="Explore"
                    buttonStyles="bg-primary-blue
                text-white rounded-custom1 mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero"
                        fill className="object-contain" />
                </div>
                <div className="hero__image-overlay object-contain" />
            </div>
        </div>
    )
}

export default Hero;