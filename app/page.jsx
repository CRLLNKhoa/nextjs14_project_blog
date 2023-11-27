import Content from '@/components/Content'
import Profile from '@/components/Profile'

export default function Home({ params, searchParams }) {
  
  return (
    <div className='grid grid-cols-4 container mt-4'>
      <Profile id="profile" />
      <Content />
    </div>
  )
}
