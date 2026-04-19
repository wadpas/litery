import { ShoppingCart, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'

const Header = () => (
  <header className='w-full shadow-xs sticky top-0 z-50 backdrop-blur-xs '>
    <div className='wrapper flex-between p-2'>
      <div className='flex-start'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt={`${APP_NAME} logo`}
            width={50}
            height={50}
          />
        </Link>
        <span className='hidden md:block text-2xl font-bold ml-3 font'>
          {APP_NAME.toUpperCase()}
        </span>
      </div>
      <div className='space-x-2'>
        <Button
          asChild
          variant='ghost'>
          <Link href='/cart'>
            <ShoppingCart />
            Кошик
          </Link>
        </Button>
        <Button
          asChild
          variant='ghost'>
          <Link href='/account'>
            <UserIcon />
            Вхід
          </Link>
        </Button>
      </div>
    </div>
  </header>
)

export default Header
