import { APP_NAME } from '@/lib/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='p-4 flex-center shadow-2xl'>
      <div>
        © {currentYear} {APP_NAME}. Всі права захищені.
      </div>
    </footer>
  )
}

export default Footer
