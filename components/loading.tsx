import styles from '/styles/Loading.module.css'
import paimon from '/assets/paimon.png'

const Loading = () => {
  return (
    <div className={styles.container}>
      <h1>Cargando...</h1>
      <img src='https://preview.redd.it/ki90xjn3vz561.png?width=640&crop=smart&auto=webp&s=88b26d89defeb97bd0d9c8a294321ca479424099' alt="cargando..." className={styles.paimon} />
    </div>
  )
}

export default Loading