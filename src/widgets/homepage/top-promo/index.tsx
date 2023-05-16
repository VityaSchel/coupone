import styles from './styles.module.scss'
import { Headline } from '@/widgets/headline'
import Fire from './fire.svg'
import { Promo } from '@/features/promo-card'

export function TopPromo() {
  return (
    <section className={styles.topPromos}>
      <Headline variant='h1'>Самые горячие промокоды <Fire /></Headline>
      <div className={styles.items}>
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
      </div>
    </section>
  )
}