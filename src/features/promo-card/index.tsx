import React from 'react'
import { PromoCard } from '@/features/promo-card/card'
import { PromoModal } from '@/features/promo-card/modal'
import { CouponResponse } from '@/shared/model/api/api'

export function Promo({ promo, views }: {
  promo: CouponResponse
  views: number
}) {
  const [modalVisible, setModalVisible] = React.useState(false)

  const handleOpenPromo = () => {
    // TODO: update counter
    setModalVisible(true)
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