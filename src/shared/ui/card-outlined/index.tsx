import React from 'react'
import styles from './styles.module.scss'
import { Headline } from '@/widgets/headline'
import cx from 'classnames'

export function CardOutlined({ title, children, className }: React.PropsWithChildren<{
  title: string[]
  className?: string
}>) {
  return (
    <div className={cx(styles.card, className)}>
      <Headline variant='h2'>
        <span>{title[0]}</span>
        {title[1]}
      </Headline>
      {children}
    </div>
  )
}