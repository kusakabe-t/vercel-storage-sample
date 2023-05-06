import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [kVId, setKVId] = useState(0)
  const [kVEmail, setKVEmail] = useState('')

  const getKVData = async () => {
    const response = await fetch('/api/kv/user')
    const { id, email } = await response.json()
    setKVId(id)
    setKVEmail(email)
  }
  return (
      <div>
        <p>Vercel KV</p>
        <button onClick={getKVData}>get kv data</button>
        <div>
          <p>id: {kVId}</p>
          <p>email: {kVEmail}</p>
        </div>
      </div>

      </div>
    </main>
  )
}
