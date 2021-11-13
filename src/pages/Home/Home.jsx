import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from './Home.module.css';

const Home = () => {
    const [state, setState] = useState({
        products: []
    })

    useEffect(() => {
        axios.get('https://a5de-181-167-82-136.ngrok.io/products')
            .then(res => setState({
                ...state,
                products: res.data
            }))
    }, [])
    return (
        <div className={style.Container}>
            <div className={style.Decoration}>
            </div>
            <div className={style.ContainerProducts}>
                {
                    state && state.products.map(product => {
                        return (
                            <div className={style.Product}>
                                <div className={style.ContainerImg}>
                                    <img src={product.image} alt="" />
                                </div>
                                <div className={style.ProductInfo}>
                                    <p>${product.price}</p>
                                    <button className={style.Button}>Add to cart</button>
                                </div>
                                
                            </div>
                        )
                    })
                }

            </div>
            <div className={style.Decoration2}>

            </div>
        </div>
    )
}

export default Home;