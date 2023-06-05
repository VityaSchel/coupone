import { Headline } from '@/widgets/headline'
import styles from './styles.module.scss'

export function AboutPageHeading() {
  return (
    <section className={styles.aboutPageHeading}>
      <Headline variant='h1'>О компании</Headline>
    </section>
  )
}