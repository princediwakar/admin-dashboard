import { Dashboard } from '@/components/Dashboard/Dashboard'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import React from 'react'

const Home = () => {
  return (
    <main className='grid gap-4 p-4 grid-cols-[220px,_1fr]'>
      <Sidebar />
      <Dashboard />
    </main>
  )
}

export default Home