import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

export function Modal({ visible, children }: React.PropsWithChildren<{
  visible: boolean
}>) {
  React.useEffect(() => {
    if(visible) {
      document.body.classList.add(styles.bodyLock)
    } else {
      document.body.classList.remove(styles.bodyLock)
    }
  }, [visible])

  return (
    <div className={cx(styles.modal, { [styles.visible]: visible })}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}