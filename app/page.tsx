'use client'

import FaqComponent from "@/components/faq-component";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`

export default function Home() {
  return (
    <main className=" flex-col h-auto ">
      <div className="h-screen flex items-center justify-center font-light text-sm">
        <Title>Welcome to Next.js</Title>
      </div>
      <div className="h-screen flex items-center justify-center">
        <FaqComponent />
      </div>
    </main>
  );
}
