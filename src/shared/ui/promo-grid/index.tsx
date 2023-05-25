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
          promo={{
            title: promo.name,
            description: promo.description,
            image: promo.image,
            addDate: promo.dateAdded,
            expireDate: promo.validUntil,
            rate: promo.rating as 0 | 1 | 2 | 3 | 4 | 5,
            sale: promo.discountDescription,
            code: promo.code
          }}
          views={promo.views}
        />
      ))}
    </>
  )
}