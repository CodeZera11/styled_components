'use client'

import styled from "styled-components";

export const Title = styled.h1`
  color: red;
  font-size: 12rem;
`

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title>Welcome to Next.js</Title>
    </main>
  );
}
