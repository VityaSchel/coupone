import { Headline } from '@/widgets/headline'
import styles from './styles.module.scss'

export function AboutPageInfo() {
  return (
    <section className={styles.aboutPageInfo}>
      <Headline variant='h2'>Что такое COUP?</Headline>
      <p>
        это закрытый купонный сервис, который предлагает скидки на товары и услуги от партнеров компаний до 90%. Пользователи могут использовать эти промокоды и покупать желаемый товар по гораздо более низкой цене. Есть аналогичные магазины, которые предоставят вам аналогичные варианты. Но мы в CouponOne предоставляем нашим ценным клиентам все более и более привлекательные предложения, чтобы они могли получить наибольшую выгоду
      </p>
    </section>
  )
}