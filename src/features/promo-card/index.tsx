import React from 'react'
import { PromoCard } from '@/features/promo-card/card'
import { Promo } from '@/shared/model/promo'
import { PromoModal } from '@/features/promo-card/modal'

export function Promo({ promo, views }: {
  promo: Promo
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