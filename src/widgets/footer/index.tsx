import Link from 'next/link'
import styles from './styles.module.scss'
import { Button } from '@/shared/ui/button'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <span className={styles.text}>
          {'coupone.ru\n© 2022-2023'}
        </span>
        <div className={styles.links}>
          <Link href={process.env.NEXT_PUBLIC_LINKS_LICENSE_AGREEMENT ?? ''}>Пользовательское соглашение</Link>
          <Link href={process.env.NEXT_PUBLIC_LINKS_SUBSCRIPTION_AGREEMENT ?? ''}>Тарифы</Link>
          <Link href={process.env.NEXT_PUBLIC_LINKS_PRIVACY_POLICY ?? ''}>Политика обработки данных</Link>
          {/*<Link href={process.env.NEXT_PUBLIC_LINKS_CONTACTS ?? ''}>Связаться с нами</Link>*/}
        </div>
        <Link href='/subscription'>
          <Button>Отписаться</Button>
        </Link>
      </div>
    </footer>
  )
}