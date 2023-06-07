import React from 'react'
import { PromoCard } from '@/features/promo-card/card'
import { PromoModal } from '@/features/promo-card/modal'
import { CouponResponse } from '@/shared/model/api/api'

export function Promo({ promo, views }: {
  promo: CouponResponse
  views: number
}) {
  const isFirstOpen = React.useRef(true)
  const [modalVisible, setModalVisible] = React.useState(false)

  const handleOpenPromo = () => {
    setModalVisible(true)
    if (isFirstOpen.current) {
      fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/coupons/' + promo.id + '/add-views', {
        method: 'PATCH'
      })
    }
    isFirstOpen.current = false
  }

  return (
    <>
      <PromoCard
        promo={promo}
        onOpen={handleOpenPromo}
      />
      <PromoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        promo={promo}
        views={views}
      />
    </>
  )
}