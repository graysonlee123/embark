import fsPromises from 'fs/promises'
import path from 'path'
import Container from '/src/components/container'
import Header from '/src/components/header'
import Recents from '/src/components/recents'
import Grid from '/src/components/grid'
import Category from '/src/components/category'

export default function Home({ bookmarks }) {
  const { groups } = bookmarks

  return (
    <Container>
      <Header />
      <Recents />
      <Grid>
        {groups.map(({ name, items }) => (
          <Category name={name} items={items} key={name} />
        ))}
      </Grid>
    </Container>
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
