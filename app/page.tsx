import Image from 'next/image'
import logo from '../public/logo.svg'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Image
        src={logo}
        alt='logo'
        width={100}
        height={100}></Image>
    </div>
  )
}

export default HomePage
