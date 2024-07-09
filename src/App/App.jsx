import { useState } from 'react'
import '../App/App.css'
import PersonCard from '../PersonCard/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="personCard">
      <PersonCard firstname="Jane" lastname="Doe" age={45} haircolor="Black" />
      <PersonCard firstname="Smith" lastname="John" age={88} haircolor="Brown" />
      <PersonCard firstname="Fillmore" lastname="Millard" age={50} haircolor="Brown" />
      <PersonCard firstname="Smith" lastname="Maria" age={62} haircolor="Brown" />
    </div>
  )
}

export default App
