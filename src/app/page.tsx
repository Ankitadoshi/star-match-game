import Image from 'next/image'
import styles from './page.module.css'
import StarMatch from '@/components/StarMatch/StarMatch'

export default function Home() {
  return (
    <main className={styles.main}>
      <StarMatch />
    </main>
  )
}
