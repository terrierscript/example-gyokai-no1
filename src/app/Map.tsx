import React, { useRef } from "react"
import { NUM, VAR_NUM, VAR_SIZE } from "./Variables"
import styled from "@emotion/styled"
import { ItemCube } from "./ItemCube"

export const Grid = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: repeat(${VAR_NUM}, ${VAR_SIZE});
  grid-template-columns: repeat(${VAR_NUM}, ${VAR_SIZE});
  /* background: rgba(0, 100, 100, 0.5); */
  grid-gap: var(--gap, 10px);
  transition: 0.5s;
  transform-style: preserve-3d;
`

export const ItemBg = styled.div`
  /* background: rgba(255, 0, 0, 0.6); */
  border: dotted 1px gray;
  height: ${VAR_SIZE};
  width: ${VAR_SIZE};
  :hover {
    background: blue;
  }
`

const MapTile = () => {
  const ref = useRef()
  return <ItemBg />
}
const graph = (i) => `calc(${i * i} * ${VAR_SIZE} /8)`
export const Map = () => {
  return (
    <Grid>
      {Array(NUM)
        .fill(null)
        .map((_, i) =>
          i < 8 ? (
            <div
              style={{
                "--color": "red",
                "--height": graph(i + 1)
              }}
              key={i}
            >
              <ItemCube color="rgba(255,0,0,0.5)" />
            </div>
          ) : null
        )}
    </Grid>
  )
}
