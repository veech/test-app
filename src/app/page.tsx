import { api, HydrateClient } from '@/trpc/server'
import styles from './index.module.css'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./_components/map'), { ssr: false })

export default async function Home() {
  const hello = await api.post.hello({ text: 'from tRPC' })

  void api.post.getLatest.prefetch()

  return (
    <HydrateClient>
      <main className={styles.main}>
        <h1 className={styles.title}>{hello.greeting}</h1>
        <Map />
      </main>
    </HydrateClient>
  )
}
