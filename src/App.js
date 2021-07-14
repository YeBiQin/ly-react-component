import React, { useState } from 'react'
import Button from './components/button/button'

// 项目主模块
function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    console.log(11);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }

  return (
    <div className="App">
      <Button className="test_btn" onClick={handleClick} loading={loading}>测试按钮</Button>
    </div>
  )
}

export default App