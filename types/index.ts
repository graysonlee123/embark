export interface EmbarkBookmarks {
  groups: EmbarkGroup[]
}

export interface EmbarkGroup {
  name: string
  items: EmbarkLink[]
  icon?: string
}

export interface EmbarkLink {
  label: string
  url: string
  blank?: boolean
}

export interface LocalStorageEmbarkLink extends EmbarkLink {
  timestamp: number
}
