import React from "react"
import { CacheProvider } from "@emotion/core"
import createCache from "@emotion/cache"
import { Map as Graph } from "./Map"
import { Camera } from "./Camera"
import { Variables } from "./Variables"
import styled from "@emotion/styled"

export const myCache = createCache({
  prefix: true
})
const View = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Text = styled.div`
  font-size: 15vh;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 6px black;
  position: absolute;
  transform: rotateZ(15deg) translate(10vw, 20vh);
`
export const App = () => {
  return (
    <View>
      <CacheProvider value={myCache}>
        <Variables>
          <Camera>
            <Graph />
          </Camera>
          {/* <Text>
            <div>圧倒的な成長率！</div>
            <div>業界 No.1 !</div>
          </Text> */}
        </Variables>
        {/* </Theme> */}
      </CacheProvider>
    </View>
    // {/* </StyleSheetManager> */}
  )
}
