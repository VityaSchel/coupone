import styles from './styles.module.scss'
import { Headline } from '@/widgets/headline'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { CouponResponse } from '@/shared/model/api/api'
import { PromoGrid } from '@/shared/ui/promo-grid'

export function AllPromos({ promos }: {
  promos: CouponResponse[]
}) {
  const normalizedPromos = [...promos, ...new Array(3 - promos.length).fill(promos[0])]

  return (
    <section className={styles.allPromos}>
      <Headline variant='h1'>Все акции</Headline>
      <div className={styles.promos}>
        <PromoGrid promos={normalizedPromos} />
      </div>
      <Link href='/promos' className={styles.showAll}>
        <Button variant='text'>Показать больше &rarr;</Button>
      </Link>
    </section>
  )
}