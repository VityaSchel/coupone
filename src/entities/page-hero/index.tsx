import { Headline } from '@/widgets/headline'
import styles from './styles.module.scss'

export function PageHero({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.hero}>
      <Headline variant='h1'>{children}</Headline>
    </div>
  )
}