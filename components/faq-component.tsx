import React, { useState } from 'react';
import styled from 'styled-components';

interface Link {
    title: string;
}

const FaqComponent: React.FC = () => {
    const [selected, setSelected] = useState<number>(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const linksArray: Link[] = [
        {
            title: 'About invygo'
        },
        {
            title: 'Pricing'
        },
        {
            title: 'Documents and Requirements'
        },
        {
            title: 'Delivery and Service'
        },
        {
            title: 'Insurance'
        },
    ];

    const items = [
        [
            {
                title: 'Accordion Item 1',
                content: 'invygo is an in-app car subs serive allowing users to subscribe mnthely, yearly or even subscrie to own.\n\nWe believe that mobielity and access to a car should not be continegne ont paperwork and compilcated processes.',
            },
            {
                title: 'Accordion Item 2',
                content: 'Content of Accordion Item 2',
            },
            {
                title: 'Accordion Item 3',
                content: 'Content of Accordion Item 3',
            },
        ],
        [
            {
                title: 'Pricing Accordion Item 1',
                content: 'Pricing content 1',
            },
            {
                title: 'Pricing Accordion Item 2',
                content: 'Pricing content 2',
            },
        ],
        [
            {
                title: 'Documents Accordion Item 1',
                content: 'Documents content 1',
            },
            {
                title: 'Documents Accordion Item 2',
                content: 'Documents content 2',
            },
            {
                title: 'Documents Accordion Item 3',
                content: 'Documents content 3',
            },
        ],
        [
            {
                title: 'Delivery Accordion Item 1',
                content: 'Delivery content 1',
            },
            {
                title: 'Delivery Accordion Item 2',
                content: 'Delivery content 2',
            },
        ],
        [
            {
                title: 'Insurance Accordion Item 1',
                content: 'Insurance content 1',
            },
        ],
    ];

    return (
        <FaqContainer>
            <Heading>FAQ</Heading>
            <Content>
                <LinksContainer>
                    {linksArray.map((link, i) => (
                        <LinkItem
                            key={i}
                            onClick={() => {
                                setSelected(i);
                                setSelectedIndex(null);
                            }}
                            selected={i === selected}
                        >
                            {link.title}
                        </LinkItem>
                    ))}

                    <ViewAllButton>View all FAQ</ViewAllButton>
                </LinksContainer>
                <AccordionContainer>
                    {items[selected].map((item, index) => (
                        <AccordionItem key={index} open={selectedIndex === index}>
                            <AccordionTitle onClick={() => toggleItem(index)}>
                                {item.title}
                                <span className='text-xl'>
                                    {selectedIndex === index ? '-' : '+'}
                                </span>
                            </AccordionTitle>
                            <AccordionContent>{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </AccordionContainer>
            </Content>
        </FaqContainer>
    );
};

const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    height: 500px;
    @media (min-width: 768px) { 
        padding: 40px 80px;
        gap: 50px;
    }
`;

const Content = styled.div`
    display: flex; 
    justify-content: between;
    flex-direction: column; 
    width: 100%;
    padding: 0px 20px;
    @media (min-width: 768px) { 
        flex-direction: row; 
    }
`

const Heading = styled.h2`
    font-size: 2.25rem;
    line-height: 2.5rem; 
    font-weight: 700; 
    letter-spacing: 0.05em;
    padding: 10px;
    @media (min-width: 768px) { 
        flex-direction: row; 
    }
`

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 1rem;
    @media (min-width: 768px) { 
        flex-direction: column; 
        width: 50%;
        gap: 0.5rem;
        align-items: start;
        height: fit;
    }
    white-space: nowrap; /* Ensures the items stay in a single line */
    overflow-y: hidden; /* Hides vertical overflow */
    -webkit-overflow-scrolling: touch; /* Enables smooth scrolling on iOS */
    padding-bottom: 10px; /* Adds some space at the bottom for scroll bar */
`;

interface LinkItemProps {
    selected: boolean;
}

const LinkItem = styled.div<LinkItemProps>`
    font-size: 1rem;
    cursor: pointer;
    font-weight: ${({ selected }) => (selected ? 'bold' : 'light')};
    transition: all 0.3s;
    @media (min-width: 768px) { 
        margin-right: 10px;
    }
`;

const ViewAllButton = styled.button`
    width: fit-content;
    
    font-weight: bold;
    color: #3b82f6;
    border: none;
    background: none;
    cursor: pointer;
    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`;

const AccordionContainer = styled.div`
    overflow-y: auto;
    overflow-y: auto;
    max-height: 600px;
    @media (min-width: 768px) { 
        width: calc(100% - 250px);
        width: 70%;
        margin-top:0px;
    }
    margin-top:30px;
`;

interface AccordionItemProps {
    open: boolean;
}

const AccordionItem = styled.div<AccordionItemProps>`
    overflow: hidden;
    max-height: ${({ open }) => (open ? '500px' : '50px')};
    transition: max-height 0.3s ease-in-out;
    transition-duration: ${({ open }) => (open ? '0.3s' : '0.1s')}; /* Instant transition when opening, no transition when closing */
    margin: 5px 0px;
`;

const AccordionTitle = styled.div`
    padding: 5px 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    line-height: 1.5rem;
`;

const AccordionContent = styled.div`
    padding: 12px 5px;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.25rem;
    max-height: 200px;
    overflow-y: auto; 
`;

export default FaqComponent;
