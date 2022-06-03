import fsPromises from 'fs/promises'
import path from 'path'
import Script from 'next/script'
import SiteHead from '/src/components/site-head'
import Container from '/src/components/container'
import Header from '/src/components/header'
import Recents from '/src/components/recents'
import Grid from '/src/components/grid'
import Group from '/src/components/group'

export default function Home({ bookmarks }) {
  const { groups } = bookmarks

  return (
    <>
      <SiteHead />
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

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data/bookmarks.json')
  const json = await fsPromises.readFile(filePath)
  const bookmarks = JSON.parse(json)

  return {
    props: {
      bookmarks,
    },
    revalidate: 10,
  }
}
