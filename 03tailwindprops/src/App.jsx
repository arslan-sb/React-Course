import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj={arr: [1,2,3]}

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-xl">
      <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Meet our leadership</h2>
      <p className="mt-6 text-lg/8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
    </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <Card member="Arslan" designation="Ceo"/>
      <Card member="Moeez" />
  

    </ul>
  </div>
</div>
    </div>

    



    </>
  )
}

export default App
