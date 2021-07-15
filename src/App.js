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
      <Button type="default" size="mini">测试按钮</Button>
      <Button type="danger" size="small">测试按钮</Button>
      <Button type="primary" size="medium">测试按钮</Button>
      <Button type="warning" size="large" onClick={handleClick} loading={loading}>测试按钮</Button>
    </div>
  )
}

export default App