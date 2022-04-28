import { hotelOffer } from "../pages";
import styles from '../styles/HotelOffers.module.css'

export default function HotelOffer({image, price, name} : hotelOffer) {
  return (<div className={styles.offer}>
    <img className={styles.image} src={image} alt="img" />
    <div><h3>{name}</h3></div>
    <div className={styles.priceWrap}><span className={styles.price}>{price}€</span></div>
  </div>);
}
