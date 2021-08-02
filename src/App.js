
import React, { useState } from 'react'
import demoList from "@/components/_demos_";


// 项目主模块
function App() {
  const { Radio, Button } = demoList;

  return (
    <div className="App">
      <Radio />
      {/* <Button /> */}
    </div>
  )
}

export default App