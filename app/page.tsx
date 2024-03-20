'use client'

import FaqComponent, { FaqCategory } from "@/components/faq-component";
import FooterComponent from "@/components/footer-component";
import styled from "styled-components";

export interface Link {
  title: string;
}

const fakeFaqData: FaqCategory[] = [
  {
    title: 'FAQ Category 1',
    list: [
      {
        question: 'Question 1',
        answer: 'Answer 1',
      },
      {
        question: 'Question 2',
        answer: 'Answer 2',
      },
      {
        question: 'Question 3',
        answer: 'Answer 3',
      },
      {
        question: 'Question 4',
        answer: 'Answer 4',
      },
    ],
  },
  {
    title: 'FAQ Category 2',
    list: [
      {
        question: 'Question 5',
        answer: 'Answer 5',
      },
      {
        question: 'Question 6',
        answer: 'Answer 6',
      },
      {
        question: 'Question 7',
        answer: 'Answer 7',
      },
      {
        question: 'Question 8',
        answer: 'Answer 8',
      },
    ],
  },
  {
    title: 'FAQ Category 3',
    list: [
      {
        question: 'Question 9',
        answer: 'Answer 9',
      },
      {
        question: 'Question 10',
        answer: 'Answer 10',
      },
      {
        question: 'Question 11',
        answer: 'Answer 11',
      },
      {
        question: 'Question 12',
        answer: 'Answer 12',
      },
    ],
  },
  {
    title: 'FAQ Category 4',
    list: [
      {
        question: 'Question 13',
        answer: 'Answer 13',
      },
      {
        question: 'Question 14',
        answer: 'Answer 14',
      },
      {
        question: 'Question 15',
        answer: 'Answer 15',
      },
      {
        question: 'Question 16',
        answer: 'Answer 16',
      },
    ],
  },
];


export default function Home() {
  return (
    <main className="flex gap-32 flex-col h-auto">
      <div className="flex items-center justify-center font-light text-sm">
        <Title>Welcome to Next.js</Title>
      </div>
      <div className=" flex items-center justify-center">
        <FaqComponent faqData={fakeFaqData} />
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
