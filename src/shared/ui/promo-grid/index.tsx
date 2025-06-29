// I have no idea where to put this in context of FSD, so I thought this would be the best
// place, since this component is basically reusable utility: imagine you're giving it "Promo" 
// component and props remapping config; it has these variables predefined 
// TODO: move promo-grid somewhere else or remove this comment

import { Promo } from '@/features/promo-card'
import { CouponResponse } from '@/shared/model/api/api'

export function PromoGrid({ promos }: {
  promos: CouponResponse[]
}) {
  return (
    <>
      {promos.map(promo => (
        <Promo
          key={`${promo.name} ${promo.code}`}
          promo={promo}
          views={promo.views}
        />
      ))}
    </>
  )
}