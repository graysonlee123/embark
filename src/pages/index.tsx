import fsPromises from 'fs/promises'
import path from 'path'
import { GetStaticProps } from 'next'
import { FunctionComponent } from 'react'
import { EmbarkBookmarks, EmbarkGroup } from '../../types'
import Script from 'next/script'
import { SiteHead } from '../components/site-head'
import { Container } from '../components/container'
import { Header } from '../components/header'
import { Recents } from '../components/recents'
import { Grid } from '../components/grid'
import { Group } from '../components/group'

const Home: FunctionComponent<{ bookmarks: EmbarkBookmarks }> = ({
  bookmarks,
}) => {
  const { groups }: { groups: EmbarkGroup[] } = bookmarks

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

export const getStaticProps: GetStaticProps = async (context) => {
  const cwd: string = process.cwd()
  const filePath: string = path.join(cwd, 'data/bookmarks.json')
  const json: Buffer = await fsPromises.readFile(filePath)
  const bookmarks: JSON = await JSON.parse(json.toString())

  return {
    props: {
      bookmarks,
    },
    revalidate: 10,
  }
}

export default Home
