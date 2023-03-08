import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import classNames from "classnames/bind";
import styles from './Header.module.scss';
// import useScrollWatch from '../hooks/useScrollWatch';
import Link from "next/link";;

const cx = classNames.bind(styles);

export default function Header() {
    // const { scrollMoved: isScrolled } = useScrollWatch();

    return (
        <header
            className={cx('header', {
                // is_scroll: isScrolled,
                // is_spread: isSpread,
                // is_premium: isPremiumStyle,
                // is_hide: isHide,
            })}
        >
            <div className={cx('header_wrap')}>
                <ul className={cx('gnb_list')}>
                    <li className={cx('gnb_item')}>
                        <Link href="/" className={cx('gnb')}>
                            HOME
                            {/*<a href="#!" role="menuitem" className={cx('menu')}>HOME</a>*/}
                        </Link>
                    </li>
                    <li className={cx('gnb_item')}>
                        <Link href="/#fff" className={cx('gnb')}>Project</Link>
                    </li>
                    <li className={cx('gnb_item')}>
                        <Link href="#a" className={cx('gnb')}>HOME</Link>
                    </li>
                    <li className={cx('gnb_item')}>
                        <Link href="#b" className={cx('gnb')}>HOME</Link>
                    </li>
                    <li className={cx('gnb_item')}>
                        <Link href="#c" className={cx('gnb')}>HOME</Link>
                    </li>
                    <li className={cx('gnb_item')}>
                        <Link href="#d" className={cx('gnb')}>HOME</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
