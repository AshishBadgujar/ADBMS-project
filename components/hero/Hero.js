import Link from 'next/link';
import React from 'react'
import styling from './Hero.module.scss';
import Image from 'next/image'

export default function Hero() {
    return (
        <div className={styling.hero}>
            <div className={styling.row}>
                <div className={styling.text}>
                    <h2>Just Read every day of your life,<br /> Then see what happens.</h2>
                    <br />
                    <form action="" className={styling.auth}>
                        <input type="email" name="email" id="" placeholder="Email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <Image className={styling.img} src="/images/hero-1.png" alt="hero" width={500} height={300} />
            </div>
        </div>
    )
}
