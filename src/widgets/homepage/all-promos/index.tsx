import { Promo } from '@/features/promo-card'
import styles from './styles.module.scss'
import { Headline } from '@/widgets/headline'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { CouponResponse } from '@/shared/model/api/api'

export function AllPromos({ promos }: {
  promos: CouponResponse[]
}) {
  const normalizedPromos = [...promos, ...new Array(3 - promos.length).fill(promos[0])]

  return (
    <section className={styles.allPromos}>
      <Headline variant='h1'>Все акции</Headline>
      <div className={styles.promos}>
        {normalizedPromos.map(promo => (
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
      <Link href='/promos' className={styles.showAll}>
        <Button variant='text'>Показать больше &rarr;</Button>
      </Link>
    </section>
  )
}