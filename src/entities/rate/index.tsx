import styles from './styles.module.scss'
import cx from 'classnames'
import StarIcon from './star.svg'

export function Rate({ value }: {
  value: 0 | 1 |  2 | 3 | 4 | 5
}) {
  return (
    <div className={styles.rate}>
      {new Array(5).fill(null).map((_, i) => (
        <Star active={i < value} key={i} />
      ))}
    </div>
  )
}

function Star({ active }: {
  active: boolean
}) {
  return (
    <span className={cx(styles.star, { [styles.active]: active })}>
      <StarIcon />
    </span>
  )
}