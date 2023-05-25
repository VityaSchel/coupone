import styles from './styles.module.scss'
import { Headline } from '@/widgets/headline'
import Fire from './fire.svg'
import { CouponResponse } from '@/shared/model/api/api'
import { PromoGrid } from '@/shared/ui/promo-grid'

export function TopPromo({ promos }: {
  promos: CouponResponse[]
}) {
  return (
    <section className={styles.topPromos}>
      <Headline variant='h1'>Самые горячие промокоды <Fire /></Headline>
      <div className={styles.items}>
        <PromoGrid promos={promos} />
      </div>
    </section>
  )
}