import React from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'
import useMeasure from 'react-use-measure'

export function Accordion({ title, children }: React.PropsWithChildren<{
  title: string
}>) {
  const [open, setOpen] = React.useState(false)
  const [accordionRef, { height }] = useMeasure()

  return (
    <div className={styles.accordion}>
      <button onClick={() => setOpen(!open)} className={styles.heading}>
        {title}
        <span className={cx(styles.arrow, { [styles.open]: open })}></span>
      </button>
      <div className={styles.collapsableContent} style={{ height: open ? height : 0 }}>
        <p className={styles.contents} ref={accordionRef}>
          {children}
        </p>
      </div>
    </div>
  )
}