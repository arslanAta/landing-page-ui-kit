
import './App.css'
import Center from './components/Center'
import Features from './components/Features'
import Hero from './components/Hero'
import Layout from './components/Layout'
import LogoList from './components/LogoList'
import Metrics from './components/Metrics'

function App() {
  return (
    <Layout>
      <Hero />
      <LogoList />
      <Features/>
      <Metrics/>
      <Center/>
    </Layout>
  )
}

export default App
