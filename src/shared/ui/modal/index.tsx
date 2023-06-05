import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'
import { useHotkeys } from 'react-hotkeys-hook'

export function Modal({ visible, onClose, className, children, ...props }: React.PropsWithChildren<{
  visible: boolean
  onClose?: () => any
  className?: string
}> & React.HTMLAttributes<HTMLDivElement>) {
  const modalRef = React.useRef<HTMLDivElement>(null)
  useHotkeys('esc', () => visible && onClose?.(), [visible, onClose])
  const randomModalID = React.useRef<number | undefined>()

  React.useEffect(() => {
    const root = document.querySelector('html')
    if (root && modalRef.current) {
      if(visible) {
        if (randomModalID.current === undefined) randomModalID.current = Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)
        root.classList.add('scroll-lock-' + randomModalID.current)
      } else {
        root.classList.remove('scroll-lock-' + randomModalID.current)
      }
    }
  }, [modalRef, visible])

  return (
    <div
      className={cx(styles.modal, { [styles.visible]: visible })}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          onClose?.()
        }
      }}
      ref={modalRef}
      tabIndex={visible ? undefined : -1}
      {...props}
    >
      <div className={cx(styles.content, className)}>
        {children}
      </div>
    </div>
  )
}