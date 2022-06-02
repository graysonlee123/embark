import fsPromises from 'fs/promises'
import path from 'path'
import Container from '/components/container'
import Header from '/components/header'
import Grid from '/components/grid'
import Category from '/components/category'

export default function Home({ data }) {
  const { title, categories } = data

  return (
    <Container>
      <Header title={title} />
      <Grid>
        {categories.map(({ name, links, icon }) => (
          <Category name={name} links={links} icon={icon} key={name} />
        ))}
      </Grid>
    </Container>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'links.json')
  const json = await fsPromises.readFile(filePath)
  const object = JSON.parse(json)

  return {
    props: {
      data: object,
    },
    revalidate: 10,
  }
}
