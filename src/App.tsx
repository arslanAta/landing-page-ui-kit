
import './App.css'
import Center from './components/Center'
import Features from './components/Features'
import Footer from './components/Footer'
import Form from './components/Form'
import Hero from './components/Hero'
import Layout from './components/Layout'
import LogoList from './components/LogoList'
import Metrics from './components/Metrics'
import Plans from './components/Plans'
import Stories from './components/Stories'
import Team from './components/Team'
import Upload from './components/Upload'

function App() {
  return (
    <Layout>
      <Hero />
      <LogoList />
      <Features/>
      <Center/>
      <Metrics/>
      <Stories/>
      <Plans/>
      <Team/>
      <Upload/>
      <Form/>
      <Footer/>
    </Layout>
  )
}

export default App
