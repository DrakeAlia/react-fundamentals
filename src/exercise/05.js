// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({className = '', style, ...otherProps}) {
  return (
    <div
      className={`${className} box`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`


function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
  <Box className="box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
  <Box className="box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
  <Box>custom box</Box>
    </div>
  )
}

export default App



// const smallBox = <div>small lightblue box</div>
// const mediumBox = <div>medium pink box</div>
// const largeBox = <div>large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }