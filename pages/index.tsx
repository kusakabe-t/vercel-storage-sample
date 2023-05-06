import { useState } from "react";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [kVId, setKVId] = useState(0)
  const [kVEmail, setKVEmail] = useState('')

  const [postgreName, setPostgreName] = useState('')
  const [postgreOwner, setPostgreOwner] = useState('')

  const getKVData = async () => {
    const response = await fetch('/api/kv/user')
    const { id, email } = await response.json()
    setKVId(id)
    setKVEmail(email)
  }

  const getPostgreData = async () => {
    const response = await fetch('/api/postgre/pet')
    const { pets } = await response.json()

    // array
    setPostgreName(pets.rows[0].name)
    setPostgreOwner(pets.rows[0].owner)
  }

  return (
    <main>
      <div>
        <p>Vercel KV</p>
        <button onClick={getKVData}>get kv data</button>
        <div>
          <p>id: {kVId}</p>
          <p>email: {kVEmail}</p>
        </div>
      </div>

      <div>
        <p>Vercel PostgreSQL</p>
        <button onClick={getPostgreData}>get postgre data</button>
        <div>
          <p>postgreName: {postgreName}</p>
          <p>postgreOwner: {postgreOwner}</p>
        </div>
      </div>
    </main>
  )
}
