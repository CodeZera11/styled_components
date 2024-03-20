'use client'

import FaqComponent from "@/components/faq-component";
import FooterComponent from "@/components/footer-component";
import styled from "styled-components";

export interface Link {
  title: string;
}

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


export default function Home() {
  return (
    <main className=" flex-col h-auto ">
      <div className="h-screen flex items-center justify-center font-light text-sm">
        <Title>Welcome to Next.js</Title>
      </div>
      <div className="h-screen flex items-center justify-center">
        <FaqComponent linksArray={linksArray} items={items} />
      </div>
      <div className="h-screen flex items-center justify-center">
        <FooterComponent />
      </div>
    </main>
  );
}


const Title = styled.h1`
  color: red;
`
