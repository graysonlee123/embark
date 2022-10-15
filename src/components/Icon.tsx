import styles from '@styles/Icon.module.css'

interface IconProps {
  name?: string
}

export function Icon({ name = 'link-outline' }: IconProps) {
  return (
    <span className={styles.icon}>
      <i
        dangerouslySetInnerHTML={{
          __html: `<ion-icon name="${name}"></ion-icon>`,
        }}
      />
    </span>
  )
}
