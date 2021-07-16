import React, { useState } from 'react'
import Button from './components/button/button'

// 项目主模块
function App() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const [loading5, setLoading5] = useState(false);
  const [loading6, setLoading6] = useState(false);



  const handleClick1 = (e) => {
    setLoading1(true);
    setTimeout(() => {
      document.body.setAttribute("data-theme", "dark");
      setLoading1(false);
    }, 2000)
  }

  const handleClick2 = (e) => {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 2000)
  }

  const handleClick3 = (e) => {
    setLoading3(true);
    setTimeout(() => {
      document.body.setAttribute("data-theme", "light");
      setLoading3(false);
    }, 2000)
  }

  const handleClick4 = (e) => {
    setLoading4(true);
    setTimeout(() => {
      setLoading4(false);
    }, 2000)
  }


  const handleClick5 = (e) => {
    setLoading5(true);
    setTimeout(() => {
      setLoading5(false);
    }, 2000)
  }

  const handleClick6 = (e) => {
    setLoading6(true);
    setTimeout(() => {
      setLoading6(false);
    }, 2000)
  }
  return (
    <div className="App">
      <Button type="success" size="large">测试按钮</Button>
      <Button type="danger" size="medium" size="medium" onClick={handleClick6} loading={loading6}>测试按钮</Button>
      <Button type="warning" size="small">测试按钮</Button>
      <Button type="primary" size="mini">测试按钮</Button>
      <hr />
      <Button decorate="plain" type="success" size="large">测试按钮</Button>
      <Button decorate="plain" type="danger" size="medium" onClick={handleClick5} loading={loading5}>测试按钮</Button>
      <Button decorate="plain" type="warning" size="small">测试按钮</Button>
      <Button decorate="plain" type="primary" size="mini">测试按钮</Button>
      <hr />
      <Button decorate="full" type="success" size="large" onClick={handleClick1} loading={loading1}>切换深色背景</Button>
      <Button decorate="full" type="danger" size="medium" onClick={handleClick2} loading={loading2}>测试按钮</Button>
      <Button decorate="full" type="warning" size="small" onClick={handleClick3} loading={loading3}>切换浅色背景</Button>
      <Button decorate="full" type="primary" size="mini" onClick={handleClick4} loading={loading4}>测试按钮</Button>
    </div>
  )
}

export default App