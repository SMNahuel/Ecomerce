import style from './Navbar.module.css';
import Carrito from '../../assets/shopping_cart.png';
import Search from '../../assets/search.png';
import User from '../../assets/account_circle.png';

const Navbar = () => {
    return (
        <div className={style.Container}>
            <div>
                <button className={style.Button}><img src={Carrito} alt="Carrito" /></button>
                <button className={style.Button}><img src={Search} alt="Lupa" /></button>
            </div>
            <div className={style.CtnNav}>
                <ul className={style.CtnUl}>
                    <li>
                        Womens's Clothing
                    </li>
                    <li>
                        Mens's Clothing
                    </li>
                    <li>
                        Technology
                    </li>
                    <li>
                        Jelwery
                    </li>
                </ul>

            </div>
            <div>
                <button className={style.Button}> <img className={style.Circle} src={User} alt="Usuario" /></button>
            </div>
        </div>
    )
}

export default Navbar;