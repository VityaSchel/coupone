import Link from 'next/link'
import styles from './styles.module.scss'

export function SupportContacts() {
  const phone = (process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? '').match(/7(\d\d\d)(\d\d\d)(\d\d)(\d\d)/)
  if (!phone) return <></>
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL

  return (
    <div className={styles.contacts}>
      <span className={styles.heading}>У вас есть вопросы или предложения по сотрудничеству?</span>
      <div className={styles.email}>
        <span>Напишите нам на почту</span>
        <Link href={`mailto:${email}`} className={styles.value}>
          {email}
        </Link>
      </div>
      <span className={styles.text}>Поможем в любом вопросе</span>
      <Link href={`tel:+${phone}`} className={styles.phone}>
        +7 ({phone[1]}) {phone[2]}-{phone[3]}-{phone[4]}
      </Link>
      <span className={styles.time}>Время работы: <span>{process.env.NEXT_PUBLIC_SUPPORT_TIME}</span></span>
    </div>
  )
}