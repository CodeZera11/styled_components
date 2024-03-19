import Image from 'next/image'
import React from 'react'

const imageLink = 'https://s3-alpha-sig.figma.com/img/2391/738f/9cc7fb822822d4714700ce5e80f5c4fa?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poZw3KqjwlKbU6gjKLb7FddimvY3uXFpAmZxXenaJgbfBmWz~ZfXpl2Kh5fB-a~8gDUNdbl8yyJqsW5s481-dthVAru~dVp3ty~5x6bVYdjZrWU9xwbyipixBybwQH5BJ78q2MhnpHjmPFWO4otkYk7d3LYAJNZoeN~xsXy5qDb13FogUnv6zLPds1RCQNwPXNoTbcABGiOMP5HNfG4Ci7cXxZox5UdetKbMSwxwUh28VbawudAJsfnX6wjHAL~UiE~ZiQMDm5kIHm4kUh5AeGLNqWSQtnrNnn6jlhdcBEHqcwgRm~ukTyYpGL5cdrmJepCiKrEXKlfKgy-IXm7SnA__'

const FooterComponent = () => {
    return (
        <div className='h-[42rem] w-full max-w-[100rem] relative'>
            <Image className='absolute overflow-x-hidden' layout='fill' src={'/curved-background.png'} alt='Image' />
            <Image className='absolute h-[15em] w-[33rem] -bottom-7 right-10' width={1000} height={1000} src={imageLink} alt='Image' />
            <div className='flex flex-col gap-3 px-20 py-44 mt-10'>
                <h4 className='text-base font-semibold'>Car rental in the UAE</h4>
                <p className='w-[40%] text-sm text-gray-500'>Renting a car in the UAE has never been more convenient: with invygo, drivers can now rent a car through a seamless process, simply using the invygo app! It is a hassle-free solution tailored to all lifestyles: whether looking for a car rental in Abu Dhabi, a budget car rental in Dubai or to rent a car in Sharjah, invygo has got you covered. The intuitive platform focuses on efficiency and simplicity: there is no paperwork or complicated process with invygo.</p>
                <div className='mt-7 flex items-center gap-5'>
                    <button className='p-3 rounded-full border'>
                        left
                    </button>
                    <button className='p-3 rounded-full border'>
                        right
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent