'use client'

import { Person } from '@/types/Person'
import { useState } from 'react'

const Page = () => {
  const handleClearName = () => {
    setFullName({ ...fullName, name: '' })
  }
  const handleClearLastName = () => {
    setFullName({ ...fullName, lastName: '' })
  }
  const handleClearFullName = () => {
    setFullName({ name: '', lastName: '' })
  }
  const [fullName, setFullName] = useState<Person>({ name: '', lastName: '' })
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input
        className="border border-black text-2xl text-black rounded-md mb-3"
        type="text"
        placeholder="Nome"
        value={fullName.name}
        onChange={(e) => setFullName({ ...fullName, name: e.target.value })}
      />
      <input
        className="border border-black text-2xl text-black rounded-md mb-3"
        type="text"
        placeholder="Sobrenome"
        value={fullName.lastName}
        onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })}
      />
      <p>Meu nome é:</p>
      <p>
        {fullName.name} {fullName.lastName}
      </p>
      <button
        onClick={handleClearName}
        className="bg-blue-700 p-2 rounded-md mt-4"
      >
        Limpar Nome
      </button>
      <button
        onClick={handleClearLastName}
        className="bg-blue-700 p-2 rounded-md mt-4"
      >
        Limpar Sobrenome
      </button>
      <button
        onClick={handleClearFullName}
        className="bg-blue-700 p-2 rounded-md mt-4"
      >
        Limpar Tudo
      </button>
    </div>
  )
}

export default Page
