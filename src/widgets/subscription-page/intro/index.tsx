import { CardOutlined } from '@/shared/ui/card-outlined'
import styles from './styles.module.scss'
import IntroImage from '@/assets/subscription-page/intro.svg'

export function SubscriptionPageIntro() {
  return (
    <div className={styles.intro}>
      <CardOutlined
        title={['Где я нахожусь', 'в данный момент?']}
        className={styles.introCard}
      >
        Это страница по управлению подписками, а также мы ответим на самые распространенные вопросы
      </CardOutlined>
      <IntroImage />
    </div>
  )
}