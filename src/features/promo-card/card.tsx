import styles from './styles.module.scss'
import { Card } from '@/shared/ui/card'
import { Promo } from '@/shared/model/promo'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'

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
        <p>{promo.description}</p>
      </div>
      <div className={styles.actions}>
        <Button onClick={() => onOpen()}>Посмотреть</Button>
      </div>
    </Card>
  )
}