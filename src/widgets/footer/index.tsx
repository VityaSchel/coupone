import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { SupportContacts } from '@/entities/support-contacts'
import Close from '@/assets/close.svg'
import { IconButton } from '@/shared/ui/icon-button'

export function Footer() {
  const [supportVisible, setSupportVisible] = React.useState(false)

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <span className={styles.text}>
          {'couponss.ru\n© 2022-2023'}
        </span>
        <div className={styles.links}>
          <Link href={process.env.NEXT_PUBLIC_USER_AGREEMENT ?? ''}>Пользовательское соглашение</Link>
          <Link href={process.env.NEXT_PUBLIC_TARIFFS ?? ''}>Тарифы</Link>
          <Link href={process.env.NEXT_PUBLIC_DATA_POLICY ?? ''}>Политика обработки данных</Link>
          <Button variant='text' onClick={() => setSupportVisible(true)}>Связаться с нами</Button>
          <div>
            <Modal
              visible={supportVisible}
              onClose={() => setSupportVisible(false)}
            >
              <IconButton onClick={() => setSupportVisible(false)}><Close /></IconButton>
              <SupportContacts />
            </Modal>
          </div>
        </div>
        <Link href='/subscription'>
          <Button>Отписаться</Button>
        </Link>
      </div>
    </footer>
  )
}