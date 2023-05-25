import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import LargeLogo from '@/assets/large-logo.png'
import Link from 'next/link'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { SupportContacts } from '@/entities/support-contacts'
import { Squash as Hamburger } from 'hamburger-react'
import cx from 'classnames'

export function AppBar() {
  const [supportVisible, setSupportVisible] = React.useState(false)
  const [mobileMenuVisible, setMobileMenuVisible] = React.useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src={LargeLogo} priority fill alt='Logo' />
          </Link>
        </div>
        <div className={styles.links}>
          <div className={styles.contactsContainer}>
            <button className={styles.contactsButton}>
              Контакты
            </button>
            <div className={styles.contacts}>
              <SupportContacts />
            </div>
          </div>
          <Link href='/promos'>Все промокоды</Link>
          <Link href='/faq'>Вопросы и ответы</Link>
          <Link href='/about'>О компании</Link>
        </div>
        <div className={styles.buttons}>
          <Link href='/login' className={styles.loginButton}><Button variant='alternative'>Войти</Button></Link>
          <Button onClick={() => setSupportVisible(true)} className={styles.supportButton}>Поддержка</Button>
          <Button onClick={() => setMobileMenuVisible(!mobileMenuVisible)} className={styles.mobileMenuButton}>
            <Hamburger 
              toggled={mobileMenuVisible}
              size={17}
            />
          </Button>
          <div className={cx(styles.mobileMenu, { [styles.visible]: mobileMenuVisible })}>
            <Link href='/login'>Вход</Link>
            <Link href='/contacts'>Контакты</Link>
            <Link href='/promos'>Все промокоды</Link>
            <Link href='/faq'>Вопросы и ответы</Link>
            <Link href='/about'>О компании</Link>
          </div>
          <Modal 
            visible={supportVisible}
            onClose={() => setSupportVisible(false)}
          >
            <SupportContacts />
          </Modal>
        </div>
      </nav>
    </header>
  )
}