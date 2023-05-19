import { Promo } from '@/features/promo-card'
import styles from './styles.module.scss'
import { Headline } from '@/widgets/headline'

export function AllPromos() {
  return (
    <section className={styles.allPromos}>
      <Headline variant='h1'>Все акции</Headline>
      <div className={styles.promos}>
        <Promo
          promo={{
            title: 'Промокод на Whoosh',
            description: 'Действует в приложение',
            image: 'https://placehold.co/264x158/png',
            addDate: '2023-05-15T14:48:48.320Z',
            expireDate: '2023-05-21T14:48:48.320Z',
            rate: 5,
            sale: 'Скидка 50 рублей',
            code: 'GOODRIDE'
          }}
          views={15015}
        />
        <Promo
          promo={{
            title: 'Just food',
            description: 'Действует в приложение',
            image: 'https://placehold.co/264x158/png',
            addDate: '2023-05-15T14:48:48.320Z',
            expireDate: '2023-05-21T14:48:48.320Z',
            rate: 3,
            sale: 'Скидка 50 рублей',
            code: 'GOODRIDE'
          }}
          views={15015}
        />
        <Promo
          promo={{
            title: 'Кресла Cougar',
            description: 'Действует в приложение',
            image: 'https://placehold.co/264x158/png',
            addDate: '2023-05-15T14:48:48.320Z',
            expireDate: '2023-05-21T14:48:48.320Z',
            rate: 0,
            sale: 'Скидка 50 рублей',
            code: 'GOODRIDE'
          }}
          views={15015}
        />
        <Promo
          promo={{
            title: 'Кресла Cougar',
            description: 'Действует в приложение',
            image: 'https://placehold.co/264x158/png',
            addDate: '2023-05-15T14:48:48.320Z',
            expireDate: '2023-05-21T14:48:48.320Z',
            rate: 0,
            sale: 'Скидка 50 рублей',
            code: 'GOODRIDE'
          }}
          views={15015}
        />
      </div>
    </section>
  )
}