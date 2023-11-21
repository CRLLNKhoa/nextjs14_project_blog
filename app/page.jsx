import Content from '@/components/Content'
import Profile from '@/components/Profile'

export default function Home() {
  return (
    <main className='grid grid-cols-4 container mt-4'>
      <Profile />
      <Content />
    </main>
  )
}
