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
      <Button type="success" size="large" onClick={handleClick} loading={loading}>测试按钮</Button>
      <Button type="danger" size="medium">测试按钮</Button>
      <Button type="warning" size="small">测试按钮</Button>
      <Button type="primary" size="mini">测试按钮</Button>
      <hr />
      <Button decorate="plain" type="success" size="large" onClick={handleClick} loading={loading}>测试按钮</Button>
      <Button decorate="plain"  type="danger" size="medium" >测试按钮</Button>
      <Button decorate="plain"  type="warning" size="small">测试按钮</Button>
      <Button decorate="plain"  type="primary" size="mini">测试按钮</Button>
      <hr />
      <Button decorate="full"  type="success" size="large" onClick={handleClick} loading={loading}>测试按钮</Button>
      <Button decorate="full"  type="danger" size="medium" >测试按钮</Button>
      <Button decorate="full"  type="warning" size="small">测试按钮</Button>
      <Button decorate="full"  type="primary" size="mini">测试按钮</Button>
    </div>
  )
}

export default App