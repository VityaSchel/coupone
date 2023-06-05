import styles from './styles.module.scss'
import { PageHero } from '@/entities/page-hero'

export function FaqPageHeading() {
  return (
    <section className={styles.aboutPageHeading}>
      <PageHero>Вопросы и ответы</PageHero>
    </section>
  )
}