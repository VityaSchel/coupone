import React from 'react'
import styles from './styles.module.scss'
import { Promo } from '@/shared/model/promo'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Headline } from '@/widgets/headline'
import Image from 'next/image'
import Cart from './cart.svg'
import Close from './close.svg'
import copy from 'copy-to-clipboard'
import { FaExclamationCircle } from 'react-icons/fa'
import cx from 'classnames'
import { useAppSelector } from '@/shared/store/hooks'
import { selectAuthentification } from '@/shared/store/slices/authentification'

export function PromoModal({ promo, visible, onClose, views }: {
  promo: Promo
  visible: boolean
  onClose: () => any
  views: number
}) {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopyPromo = () => {
    setIsCopied(true)
    copy(promo.code)
  }

  const { authentificated } = useAppSelector(selectAuthentification)

  return (
    <Modal visible={visible} onClose={onClose} className={styles.modal} data-modal='true'>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={promo.image} alt={promo.title} fill />
        </div>
        <div className={styles.info}>
          <Headline variant='h2'>{promo.title}</Headline>
          <div className={styles.bar}>
            <div className={styles.sale}>
              {promo.sale}
            </div>
            <div className={styles.views}>
              <Cart />
              <span>
                {views}
              </span>
            </div>
          </div>
          <p>
            {promo.description}
          </p>
          <div className={styles.expireDate}>
            <span>Дата действия: до </span>
            <span className={styles.value}>{Intl.DateTimeFormat('ru-RU', {
              day: 'numeric',
              month: 'long'
            }).format(new Date(promo.expireDate))}</span>
          </div>
          {(promo.authRequired && !authentificated) && (
            <div className={styles.authRequired}>
              <FaExclamationCircle />
              <span>Чтобы открыть доступ к данному промокоду - необходимо зарегистрироваться.</span>
            </div>
          )}
        </div>
        <div className={styles.close}>
          <button onClick={onClose}>
            <Close />
          </button>
        </div>
      </div>
      <div className={styles.actions}>
        <span className={cx(styles.promocode, { [styles.disabled]: promo.authRequired })}>
          {(promo.authRequired && !authentificated) ? '*'.repeat(promo.code.length) : promo.code}
        </span>
        <Button onClick={handleCopyPromo} disabled={promo.authRequired}>
          {isCopied ? 'Скопировано' : 'Скопировать промокод'}
        </Button>
      </div>
    </Modal>
  )
}