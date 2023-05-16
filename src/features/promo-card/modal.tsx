import styles from './styles.module.scss'
import { Promo } from '@/shared/model/promo'
import cx from 'classnames'

export function PromoModal({ promo, visible, views }: {
  promo: Promo
  visible: boolean
  views: number
}) {
  return (
    <div className={cx(styles.modal, { [styles.visible]: visible })}>
      <div className={styles.content}>
        Promo modal
      </div>
    </div>
  )
}