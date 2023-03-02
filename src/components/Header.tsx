import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import classNames from "classnames/bind";
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <header>
            <h1 className={cx('logo')}>hello</h1>
        </header>
    )
}
