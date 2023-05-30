import { CardOutlined } from '@/shared/ui/card-outlined'
import styles from './styles.module.scss'

export function SubscriptionPageInstruction() {
  return (
    <div className={styles.instruction}>
      <CardOutlined
        title={['Как это так', 'без подтверждения по смс?']}
        className={styles.instructionCard}
      >
        Мы используем рекуррентные платежи, также известные как рекарринговые платежи или «автоплатежи» — это возможность выполнять регулярные списания денег с банковской карты покупателя или электронного кошелька без повторного ввода реквизитов карты и без участия плательщика для инициации очередного платежа.
        {'\n\n'}
        Рекарринговые платежи используют так же такие компании как Яндекс, Google, Amazon, IVI, Netflix и многие другие.
      </CardOutlined>
    </div>
  )
}