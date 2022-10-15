import styles from '@styles/Button.module.css'

interface ButtonProps {
  children?: React.ReactNode
  callback: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, callback }: ButtonProps) {
  return (
    <button className={styles.button} onClick={callback}>
      {children}
    </button>
  )
}

export { Button }
