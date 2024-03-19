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
        {
            title: 'Accordion Item 1',
            content: 'Content of Accordion Item 1 Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1Content of Accordion Item 1',
        },
        {
            title: 'Accordion Item 2',
            content: 'Content of Accordion Item 2',
        },
        {
            title: 'Accordion Item 3',
            content: 'Content of Accordion Item 3',
        },
    ];

    return (
        <FaqContainer>
            <Heading>FAQ</Heading>
            <Content>
                <LinksContainer>
                    {linksArray.map((link, i) => (
                        <LinkItem
                            key={i}
                            onClick={() => setSelected(i)}
                            selected={i === selected}
                        >
                            {link.title}
                        </LinkItem>
                    ))}
                    <ViewAllButton>View all FAQ</ViewAllButton>
                </LinksContainer>
                <AccordionContainer>
                    {items.map((item, index) => (
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
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #d1d5db;
    width: 100%;
`;

const Content = styled.div`
    display: flex; 
    justify-content: between; 
    align-items: center;
    width: 100%;
    
`

const Heading = styled.h2`
    font-size: 2.25rem;
    line-height: 2.5rem; 
    font-weight: 700; 
    letter-spacing: 0.05em; 
`

const LinksContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 0.5rem;
    width: 50%;
`;

interface LinkItemProps {
    selected: boolean;
}

const LinkItem = styled.div<LinkItemProps>`
    font-size: 1rem;
    cursor: pointer;
    font-weight: ${({ selected }) => (selected ? 'bold' : 'light')};
    transition: all 0.3s;
    margin-right: 10px;
`;

const ViewAllButton = styled.button`
    width: fit-content;
    font-size: 1.25rem;
    font-weight: bold;
    color: #3b82f6;
    border: none;
    background: none;
    cursor: pointer;
`;

const AccordionContainer = styled.div`
    width: 50%;
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
    padding: 10px 5px;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.25rem;
`;

export default FaqComponent;
