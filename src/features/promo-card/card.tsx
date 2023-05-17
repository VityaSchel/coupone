import styles from './styles.module.scss'
import { Card } from '@/shared/ui/card'
import { Promo } from '@/shared/model/promo'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { Rate } from '@/entities/rate'

export function PromoCard({ promo, onOpen }: {
  promo: Promo
  onOpen: () => any
}) {
  return (
    <Card className={styles.card}>
      <div className={styles.image}>
        <Image src={promo.image} alt={`Промокод ${promo.title}`} fill />
      </div>
      <div className={styles.info}>
        <h3>{promo.title}</h3>
        <span className={styles.date}>
          Дата добавления: <span>{
            Intl.DateTimeFormat('ru-RU', {
              day: '2-digit',
              month: 'long'
            }).format(new Date(promo.addDate))
          }</span>
        </span>
        <p>{promo.description}</p>
        <Rate value={promo.rate} />
      </div>
      <div className={styles.actions}>
        <Button onClick={() => onOpen()}>Посмотреть</Button>
      </div>
    </Card>
  )
}