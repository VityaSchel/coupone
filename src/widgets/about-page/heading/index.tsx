import styles from './styles.module.scss'
import { PageHero } from '@/entities/page-hero'

export function AboutPageHeading() {
  return (
    <section className={styles.aboutPageHeading}>
      <PageHero>О компании</PageHero>
    </section>
  )
}