import Link from 'next/link'
import React from 'react'
import style from "./Header.module.scss";
type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <ul className={style.header}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header