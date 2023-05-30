import { CardOutlined } from '@/shared/ui/card-outlined'
import styles from './styles.module.scss'
import CardImage from '@/assets/subscription-page/card.svg'

export function SubscriptionPageSecondBlock() {
  return (
    <div className={styles.secondBlock}>
      <CardImage />
      <CardOutlined
        title={['Почему без моего', 'согласия была совершена оплата?']}
        className={styles.secondBlockCard}
      >
        На сайте Вы оформили пробную подписку, которая продлевается автоматически на несколько дней или неделю с помощью рекуррентного платежа, с которым вы согласились при оплате.
      </CardOutlined>
    </div>
  )
}