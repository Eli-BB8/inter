import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function NavBar() {

    const [site, setSite] = useState(0);
    const [guests, setGuests] = useState(0);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    
    return <nav>
      <ul className={styles.ul}>
        <li>
          <input placeholder='site name' value={site} onChange={(e) => setSite(parseInt(e.target.value))} type="number" name="site" id="site" />
        </li>
        <li>
          <input type="number" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} placeholder='people' name="guests" id="guests" />
        </li>
        <li>
          <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} placeholder='from' name="from" id="from" />
        </li>
        <li>
          <input type="date" value={to} onChange={(e) => setTo(e.target.value)} placeholder='to' name="to" id="to" />
        </li>
      </ul>
    </nav>
  }