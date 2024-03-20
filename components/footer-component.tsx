import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const imageLink =
    'https://s3-alpha-sig.figma.com/img/2391/738f/9cc7fb822822d4714700ce5e80f5c4fa?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poZw3KqjwlKbU6gjKLb7FddimvY3uXFpAmZxXenaJgbfBmWz~ZfXpl2Kh5fB-a~8gDUNdbl8yyJqsW5s481-dthVAru~dVp3ty~5x6bVYdjZrWU9xwbyipixBybwQH5BJ78q2MhnpHjmPFWO4otkYk7d3LYAJNZoeN~xsXy5qDb13FogUnv6zLPds1RCQNwPXNoTbcABGiOMP5HNfG4Ci7cXxZox5UdetKbMSwxwUh28VbawudAJsfnX6wjHAL~UiE~ZiQMDm5kIHm4kUh5AeGLNqWSQtnrNnn6jlhdcBEHqcwgRm~ukTyYpGL5cdrmJepCiKrEXKlfKgy-IXm7SnA__';

const FooterComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % textData.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + textData.length) % textData.length);
    };

    return (
        <FooterContainer>
            <ContentContainer>
                <Title>{textData[currentSlide].title}</Title>
                <Text>{textData[currentSlide].text}</Text>
                <NavigationContainer>
                    <NavigationButton onClick={handlePrevSlide}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-left"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </NavigationButton>
                    <NavigationButton onClick={handleNextSlide}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </NavigationButton>
                </NavigationContainer>
            </ContentContainer>
            <BackgroundImage width={2000} height={2000} src={'/curved-background.png'} alt="Image" />
            <MainImage
                width={1000}
                height={1000}
                src={imageLink}
                alt="Image"
            />
        </FooterContainer>
    );
};

export default FooterComponent;

const textData = [
    {
        title: 'Car rental in the UAE',
        text:
            'Renting a car in the UAE has never been more convenient: with invygo, drivers can now rent a car through a seamless process, simply using the invygo app! It is a hassle-free solution tailored to all lifestyles: whether looking for a car rental in Abu Dhabi, a budget car rental in Dubai or to rent a car in Sharjah, invygo has got you covered. The intuitive platform focuses on efficiency and simplicity: there is no paperwork or complicated process with invygo.',
    },
    {
        title: 'Second slide title',
        text: 'Second slide text',
    },
    {
        title: 'Third slide title',
        text: 'Third slide text',
    },
];

const FooterContainer = styled.div`
  height: 42rem;
  width: 100%;
  max-width: 100rem;
  position: relative;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 1rem;
    position: relative;
    z-index: 40;
    @media (min-width: 768px) { 
        padding: 40px 100px;
    }
`;

const Title = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  z-index: 40;
`;

const Text = styled.p`
    z-index: 40; 
    height: auto; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    color: #6B7280; 
    @media (min-width: 768px) { 
        font-size: 1rem;
        line-height: 1.5rem; 
        width: 40%;
    }
    @media (min-width: 1536px) { 
        height: 8rem; 
    }
`;

const NavigationContainer = styled.div`
  margin-top: 1.57rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  z-index: 40;
`;

const NavigationButton = styled.button`
    border-radius: 9999px; 
    border-width: 1px; 
    padding: 1px;
    @media (min-width: 768px) { 
        padding: 0.75rem; 
    }
`;

const BackgroundImage = styled(Image)`
    overflow-x: hidden; 
    position: absolute; 
    z-index: 10; 
    bottom: 17.8rem;
`;

const MainImage = styled(Image)`
    position: absolute; 
    right: 0; 
    z-index: 20; 
    height: 8rem;
    width: 17rem;
    bottom: 14rem;


    @media (min-width: 768px) { 
        right: 8rem; 
        bottom: 13rem; 
        height: 15em;
        width: 33rem;
    }
`;