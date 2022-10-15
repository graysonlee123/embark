import { GetStaticProps } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { Container } from '@components/Container'
import { Header } from '@components/Header'
import { Recents } from '@components/Recents'
import { Grid } from '@components/Grid'
import { Group } from '@components/Group'
import fsPromises from 'fs/promises'
import path from 'path'

interface HomeProps {
  bookmarks: EmbarkData
}

export default function Home({ bookmarks }: HomeProps) {
  const { groups } = bookmarks

  return (
    <>
      <Head>
        <title>Embark</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Container>
        <Header />
        <Recents />
        <Grid>
          {groups.map(({ name, items, icon }) => (
            <Group name={name} items={items} icon={icon} key={name} />
          ))}
        </Grid>
      </Container>
      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        type="module"
        strategy="lazyOnload"
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cwd: string = process.cwd()
  const filePath: string = path.join(cwd, 'data/bookmarks.json')
  const json = await fsPromises.readFile(filePath)
  const bookmarks: EmbarkData = await JSON.parse(json.toString())

  return {
    props: {
      bookmarks,
    },
    revalidate: 10,
  }
}
