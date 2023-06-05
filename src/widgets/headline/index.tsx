import styles from './styles.module.scss'

export function Headline({ variant = 'h1', children }: React.PropsWithChildren<{
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>) {
  const Tag = variant
  return (
    <Tag className={styles.heading}>{children}</Tag>
  )
}