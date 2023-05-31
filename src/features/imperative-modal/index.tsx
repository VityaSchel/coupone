import React from 'react'
import styles from './styles.module.scss'
import { Modal } from '@/shared/ui/modal'
import { Button } from '@/shared/ui/button'

const ImperativeModal = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false) 
  const [message, setMessage] = React.useState<string>('')
  const [onClose, setOnClose] = React.useState<null | (() => any)>(null)

  React.useImperativeHandle(ref, () => ({
    alert(message: string, onClose?: () => any) {
      setOpen(true)
      setMessage(message)
      setOnClose(() => onClose ?? null)
    }
  }))

  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }

  return (
    <Modal visible={open} onClose={handleClose} className={styles.modal}>
      <span className={styles.message}>{message}</span>
      <div className={styles.buttons}>
        <Button onClick={handleClose}>Закрыть</Button>
      </div>
    </Modal>
  )
})

ImperativeModal.displayName = 'ImperativeModal'

export { ImperativeModal }

export type ImperativeModalRef = { alert: (message: string, onClose?: () => any) => any }