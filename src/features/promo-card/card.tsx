import styles from './styles.module.scss'
import { Card } from '@/shared/ui/card'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { Rate } from '@/entities/rate'
import { CouponResponse } from '@/shared/model/api/api'

export function PromoCard({ promo, onOpen }: {
  promo: CouponResponse
  onOpen: () => any
}) {
  return (
    <Card className={styles.card} onClick={() => onOpen()}>
      <div className={styles.image}>
        <Image src={promo.image} alt={`Промокод ${promo.name}`} fill />
      </div>
      <div className={styles.info}>
        <h3>{promo.name}</h3>
        <span className={styles.date}>
          Дата добавления: <span>{
            Intl.DateTimeFormat('ru-RU', {
              day: '2-digit',
              month: 'long'
            }).format(new Date(promo.dateAdded))
          }</span>
        </span>
        <p>{promo.description}</p>
        <Rate value={promo.rating as 0 | 1 | 2 | 3 | 4 | 5} />
      </div>
      <div className={styles.actions}>
        <Button>Посмотреть</Button>
      </div>
    </Card>
  )
}