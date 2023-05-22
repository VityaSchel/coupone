import React from 'react'
import styles from './styles.module.scss'
import { CouponResponse } from '@/shared/model/api/api'
import { Promo } from '@/features/promo-card'
import { Headline } from '@/widgets/headline'

export function PromosGrid({ initialList }: {
  initialList: CouponResponse[]
}) {
  const [promos, setPromos] = React.useState(initialList)

  return (
    <div className={styles.promos}>
      <Headline variant='h1'>Все промокоды</Headline>
      <div className={styles.grid}>
        {promos.map(promo => (
          <Promo
            key={`${promo.name} ${promo.code}`}
            promo={{
              title: promo.name,
              description: promo.description,
              image: promo.image,
              addDate: promo.dateAdded,
              expireDate: promo.validUntil,
              rate: promo.rating as 0 | 1 | 2 | 3 | 4 | 5,
              sale: 'placeholder',
              code: promo.code
            }}
            views={123456}
          />
        ))}
      </div>
    </div>
  )
}