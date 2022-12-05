import { Characters } from "../interfaces/characters"
import Loading from "./loading"
import styles from '/styles/CharacterCard.module.css'

const CharacterCard = (props: { data: Characters }) => {

  const {
    fullname,
    description,
    images,
    title,
    rarity,
    element,
    weapontype,
    gender,
    region,
    affiliation,
    birthday,
    constellation,
    cv,
    version,
    name
  } = props.data

  const stars = (rarity: any) => {
    const cantidad: string[] = []
    for (let i = 0; i < parseInt(rarity[0]); i++) {
      cantidad.push('⭐')
    }
    return cantidad
  }

  const card = () => {
    return (
      <>
        <figure className={styles.figure}>
          <img src={images.icon} alt={name} className={styles.image} />
        </figure>
        <div className="info">
          <span>{stars(rarity)}</span>
          <h1>{fullname}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </>
    )
  }

  if (element === 'Pyro') {
    return (
      <div className={styles.pyro}>
        {card()}
      </div>
    )
  }

  if (element === 'Hydro') {
    return (
      <div className={styles.hydro}>
        {card()}
      </div>
    )
  }

  if (element === 'Electro') {
    return (
      <div className={styles.electro}>
        {card()}
      </div>
    )
  }

  if (element === 'Dendro') {
    return (
      <div className={styles.dendro}>
        {card()}
      </div>
    )
  }
  if (element === 'Geo') {
    return (
      <div className={styles.geo}>
        {card()}
      </div>
    )
  }
  if (element === 'Cryo') {
    return (
      <div className={styles.cryo}>
        {card()}
      </div>
    )
  }
  if (element === 'Anemo') {
    return (
      <div className={styles.anemo}>
        {card()}
      </div>
    )
  }

  return (
    <>
      <Loading />
    </>
  )
}

export default CharacterCard