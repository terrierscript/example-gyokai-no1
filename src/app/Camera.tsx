import React from "react"
import styled from "@emotion/styled"
const TilteCamera = styled.div`
  width: max-content;
  transform: rotateX(57deg) rotateZ(45deg) translateX(calc(100%));
  transform-style: preserve-3d;
  perspective: 400px;
`
const Center = styled.div`
  transform: translateX(6vw) translateY(54vh);
`
export const Camera = ({ children }) => {
  return (
    <Center>
      <TilteCamera>{children}</TilteCamera>
    </Center>
  )
}
