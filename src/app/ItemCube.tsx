import React from "react"
import styled from "@emotion/styled"
import { VAR_SIZE } from "./Variables"

export type PanelProps = {
  color: string
}

export const Panel = styled.div<PanelProps>`
  position: absolute;
  height: ${VAR_SIZE};
  width: ${VAR_SIZE};
  background: linear-gradient(rgba(255, 0, 0), pink);
  /* var(--color); */
  /* border: var(--panel-border, 1px solid rgba(0, 0, 0, 1)); */
  border: pink;
`

// .attrs(({ x, y }) => ({ x, y }))

const VAR_HEIGHT = "var(--height)"

const Front = styled(Panel)`
  height: ${VAR_HEIGHT};
  transform: rotateX(90deg)
    translateZ(calc(1 * ${VAR_HEIGHT} / 2 - ${VAR_SIZE}))
    translateY(calc(${VAR_HEIGHT} / 2));
  label: front;
`
const Back = styled(Panel)`
  height: ${VAR_HEIGHT};
  transform: rotateX(90deg) translateZ(calc(${VAR_HEIGHT} / 2))
    translateY(calc(${VAR_HEIGHT} / 2));
  label: backl;
`
const Left = styled(Panel)`
  width: ${VAR_HEIGHT};
  transform: rotateY(90deg)
    translateZ(calc(-1 * ${VAR_HEIGHT} / 2 + ${VAR_SIZE}))
    translateX(calc(-1 * ${VAR_HEIGHT} / 2));
  label: left;
`
const Right = styled(Panel)`
  width: ${VAR_HEIGHT};
  /* height: ${VAR_HEIGHT}; */
  transform: rotateY(90deg) translateZ(calc(-1 * ${VAR_HEIGHT} / 2))
    translateX(calc(-1 * ${VAR_HEIGHT} / 2));
    label:right;
`
const Bottom = styled(Panel)`
  label: bottom;
`
const Top = styled(Panel)`
  label: top;
  transform: translateZ(${VAR_HEIGHT});
`

export const ItemCube = (props: PanelProps) => {
  return (
    <>
      <Bottom {...props} />
      <Back {...props} />
      <Left {...props} />
      <Right {...props} />
      <Front {...props} />
      <Top {...props} />
    </>
  )
}
