import React from 'react'
import styles from './styles.module.scss'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Headline } from '@/widgets/headline'
import Image from 'next/image'
import Cart from './cart.svg'
import Close from '@/assets/close.svg'
import copy from 'copy-to-clipboard'
import { FaExclamationCircle } from 'react-icons/fa'
import cx from 'classnames'
import { useAppSelector } from '@/shared/store/hooks'
import { selectAuthentification } from '@/shared/store/slices/authentification'
import { CouponResponse } from '@/shared/model/api/api'
import LinkIcon from './link.png'
import Link from 'next/link'

export function PromoModal({ promo, visible, onClose, views }: {
  promo: CouponResponse
  visible: boolean
  onClose: () => any
  views: number
}) {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopyPromo = () => {
    if (promo.code) {
      setIsCopied(true)
      copy(promo.code)
    }
  }

  const { authentificated } = useAppSelector(selectAuthentification)

  const disableAuthElements = promo.authRequired && !authentificated

  return (
    <Modal visible={visible} onClose={onClose} className={styles.modal} data-modal='true'>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={promo.image} alt={promo.name} fill />
        </div>
        <div className={styles.info}>
          <Headline variant='h2'>{promo.name}</Headline>
          <div className={styles.bar}>
            <div className={styles.sale}>
              {promo.discountDescription.length > 50 ? promo.discountDescription.slice(0, 47) + '...' : promo.discountDescription}
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
            }).format(new Date(promo.validUntil))}</span>
          </div>
          {promo.link && !disableAuthElements && (
            <Link href={'https://' + promo.link} className={styles.link}>
              <Image src={LinkIcon} width={20} alt='' />
              {promo.link}
            </Link>
          )}
          {disableAuthElements && (
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
          {promo.code
            ? (disableAuthElements ? '*'.repeat(promo.code.length) : promo.code)
            : 'Действует по ссылке'
          }
        </span>
        {promo.link 
          ? (
            <Link href={'https://'+promo.link}>
              <Button>
                Перейти по ссылке
              </Button>
            </Link>
          ) : (
            <Button onClick={handleCopyPromo} disabled={disableAuthElements}>
              {isCopied ? 'Скопировано' : 'Скопировать промокод'}
            </Button>
          )
        }
      </div>
    </Modal>
  )
}