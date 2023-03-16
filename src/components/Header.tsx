import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import classNames from "classnames/bind";
import styles from './Header.module.scss';
// import useScrollWatch from '../hooks/useScrollWatch';
import Link from "next/link";;

const cx = classNames.bind(styles);

type HeaderProps = {
    isHeaderHidden: boolean
}

export default function Header({ isHeaderHidden }: HeaderProps): JSX.Element {
    return (
        <header
            className={cx('header', {"is_hide": isHeaderHidden})}
        >
            <div className={cx('header_wrap')}>
                <ul className={cx('gnb_list')}>
                    <li className={cx('gnb_item')}>
                        <Link href="/#index-my" className={cx('gnb')}>HOME</Link>
                    </li>
                    <li className={cx('gnb_item')}>
                        <Link href="/#index-project" className={cx('gnb')}>Project</Link>
                    </li>
                    <li className={cx('gnb_item')}>
                        <Link href="#index-experience" className={cx('gnb')}>Experience</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
