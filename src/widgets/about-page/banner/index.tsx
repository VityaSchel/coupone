import styles from './styles.module.scss'
import Banner from '@/assets/about-page/banner.svg'

export function AboutPageBanner() {
  return (
    <section className={styles.banner}>
      <Banner />
    </section>
  )
}