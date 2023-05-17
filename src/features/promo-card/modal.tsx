import { Promo } from '@/shared/model/promo'
import { Modal } from '@/shared/ui/modal'

export function PromoModal({ promo, visible, views }: {
  promo: Promo
  visible: boolean
  views: number
}) {
  return (
    <Modal visible={visible}>
      Promo modal
    </Modal>
  )
}