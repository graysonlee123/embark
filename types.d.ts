interface EmbarkData {
  groups: EmbarkGroup[]
}

interface EmbarkGroup {
  name: string
  items: EmbarkLink[]
  icon?: string
}

interface EmbarkLink {
  label: string
  url: string
  blank?: boolean
}

interface EmbarkStorageLink extends EmbarkLink {
  timestamp: number
}
