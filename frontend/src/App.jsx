import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
      <div className="w-80">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter Text:
        </label>
        <Input placeholder="Type something..." />
      </div>

    </div>
          </>
  )
}

export default App
