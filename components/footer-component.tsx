import Image from 'next/image'
import React, { useState } from 'react'

const imageLink = 'https://s3-alpha-sig.figma.com/img/2391/738f/9cc7fb822822d4714700ce5e80f5c4fa?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poZw3KqjwlKbU6gjKLb7FddimvY3uXFpAmZxXenaJgbfBmWz~ZfXpl2Kh5fB-a~8gDUNdbl8yyJqsW5s481-dthVAru~dVp3ty~5x6bVYdjZrWU9xwbyipixBybwQH5BJ78q2MhnpHjmPFWO4otkYk7d3LYAJNZoeN~xsXy5qDb13FogUnv6zLPds1RCQNwPXNoTbcABGiOMP5HNfG4Ci7cXxZox5UdetKbMSwxwUh28VbawudAJsfnX6wjHAL~UiE~ZiQMDm5kIHm4kUh5AeGLNqWSQtnrNnn6jlhdcBEHqcwgRm~ukTyYpGL5cdrmJepCiKrEXKlfKgy-IXm7SnA__'


const textData = [
    {
        title: 'Car rental in the UAE',
        text: 'Renting a car in the UAE has never been more convenient: with invygo, drivers can now rent a car through a seamless process, simply using the invygo app! It is a hassle-free solution tailored to all lifestyles: whether looking for a car rental in Abu Dhabi, a budget car rental in Dubai or to rent a car in Sharjah, invygo has got you covered. The intuitive platform focuses on efficiency and simplicity: there is no paperwork or complicated process with invygo.'
    },
    {
        title: 'Second slide title',
        text: 'Second slide text'
    },
    {
        title: 'Third slide title',
        text: 'Third slide text'
    }
];

const FooterComponent = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % textData.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + textData.length) % textData.length);
    };

    return (
        <div className='h-[42rem] w-full max-w-[100rem] relative'>

            <div className='flex flex-col gap-3 px-4 z-40'>
                <h4 className='text-lg font-semibold z-40'>{textData[currentSlide].title}</h4>
                <p className='md:w-[40%] text-sm md:text-base text-gray-500 h-auto 2xl:h-32  z-40'>{textData[currentSlide].text}</p>
                <div className='mt-7 flex items-center gap-5 z-40'>
                    <button className='p-[1px] md:p-3 rounded-full border' onClick={handlePrevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button className='p-[1px] md:p-3 rounded-full border' onClick={handleNextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>
            </div>
            <Image className='absolute overflow-x-hidden bottom-[17.8rem] z-10' width={2000} height={2000} src={'/curved-background.png'} alt='Image' />
            <Image className='absolute h-[8rem] w-[17rem] right-0 bottom-[14rem] md:h-[15em] md:w-[33rem] md:bottom-52 md:right-32 z-20' width={1000} height={1000} src={imageLink} alt='Image' />
        </div>
    )
}

export default FooterComponent