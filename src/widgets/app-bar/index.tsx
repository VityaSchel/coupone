import styles from './styles.module.scss'
import Image from 'next/image'
import LargeLogo from '@/assets/large-logo.png'
import Link from 'next/link'
import { Button } from '@/shared/ui/button'

export function AppBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={LargeLogo} priority fill alt='Logo' />
        </div>
        <div className={styles.links}>
          <button>
            Контакты
          </button>
          <Link href='/promo'>Все промокоды</Link>
          <Link href='/faq'>Вопросы и ответы</Link>
          <Link href='/about'>О компании</Link>
        </div>
        <div className={styles.buttons}>
          <Button>Поддержка</Button>
        </div>
      </nav>
    </header>
  )
}