import { Modal } from '@/shared/ui/modal'
import styles from './styles.module.scss'

export function DeactivatedLink({ isDeactivated }: {
  isDeactivated: boolean
}) {
  return (
    <Modal visible={isDeactivated}>
      <div className={styles.deactivatedLink}>
        <h1>Ошибка</h1>
        <span>Ссылка деактивирована!</span>
      </div>
    </Modal>
  )
}