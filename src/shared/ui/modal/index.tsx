import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'
import { useHotkeys } from 'react-hotkeys-hook'

export function Modal({ visible, onClose, className, children, ...props }: React.PropsWithChildren<{
  visible: boolean
  onClose?: () => any
  className?: string
}> & React.HTMLAttributes<HTMLDivElement>) {
  useHotkeys('esc', () => visible && onClose?.(), [visible, onClose])

  React.useEffect(() => {
    if(visible) {
      document.body.classList.add(styles.bodyLock)
    } else {
      document.body.classList.remove(styles.bodyLock)
    }
  }, [visible])

  return (
    <div 
      className={cx(styles.modal, { [styles.visible]: visible })}
      onClick={(e) => {
        if(e.currentTarget === e.target) {
          onClose?.()
        }
      }}
      {...props}
    >
      <div className={cx(styles.content, className)}>
        {children}
      </div>
    </div>
  )
}