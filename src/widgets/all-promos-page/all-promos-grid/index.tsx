import React from 'react'
import styles from './styles.module.scss'
import { CouponsResponse } from '@/shared/model/api/api'
import { Headline } from '@/widgets/headline'
import { PromoGrid } from '@/shared/ui/promo-grid'
import { Button } from '@/shared/ui/button'

export function AllPromosPageGrid({ initialList }: {
  initialList: CouponsResponse
}) {
  const [promos, setPromos] = React.useState(initialList.coupons)
  const [offset, setOffset] = React.useState(initialList.coupons.length)
  const [count, setCount] = React.useState(initialList.count)
  const [isLoading, setIsLoading] = React.useState(false)

  const loadMore = async () => {
    setIsLoading(true)
    const newCouponsRequest = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/coupons?' + new URLSearchParams({
      // 'filter[hot]': 'true',
      limit: String(4 * 1),
      offset: String(offset)
    }))
    const newCouponsResponse = await newCouponsRequest.json() as CouponsResponse
    setOffset(offset + newCouponsResponse.coupons.length)
    setPromos([...promos, ...newCouponsResponse.coupons])
    setCount(newCouponsResponse.count)
    setIsLoading(false)
  }

  return (
    <div className={styles.promos}>
      <Headline variant='h1'>Все промокоды</Headline>
      <div className={styles.grid}>
        <PromoGrid promos={promos} />
      </div>
      {offset < count && (
        <Button 
          variant='text' 
          className={styles.showAll}
          onClick={loadMore}
          disabled={isLoading}
        >
          Загрузить еще
        </Button>
      )}
    </div>
  )
}