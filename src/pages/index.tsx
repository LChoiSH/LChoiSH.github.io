import { useContext } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import classNames from "classnames/bind";
import styles from './index.module.scss';
import PortfolioContext from "../../context/context";
import ProjectList from "@/components/home/ProjectList";
import ExperienceList from "@/components/home/ExperienceList";

import projectData from "../json/projectData.json";
import experieceData from "../json/experienceData.json";

const cx = classNames.bind(styles);

export default function Home() {

    const { prefix } = useContext(PortfolioContext);

  return (
    <>
        <div className={cx("animation_intro")}>
            <h2 className={cx("home_title")}>
                안녕하세요<br />
                최성훈의 페이지입니다
            </h2>
        </div>
        <section id={"index-my"} className={cx('section_my')}>
            <h3 className="blind">인적사항</h3>
            <div className={cx("my_image_wrap")}>
                <img src={`${prefix}/assets/image/home/home_my.jpeg`} alt="home my image" className={cx("my_image")} />
            </div>
            <dl className={cx("my_dl")}>
                <dt className={cx('my_dt')}>Contact</dt>
                <dd className={cx('my_dd')}>+82-010-2056-9616</dd>
                <dd className={cx('my_dd')}><a href="mailto:csh42504@gmail.com" className={cx("email_link")}>csh42504@gmail.com</a></dd>
                <dt className={cx('my_dt')}>Education</dt>
                <dd className={cx('my_dd')}>국민대학교 소프트웨어학과 (2018 ~ 2020) (졸업)</dd>
                <dd className={cx('my_dd')}>국민대학교 경영정보학과 (2014 ~ 2017) (전과)</dd>
                <dt className={cx('my_dt')}>Tech Skill</dt>
                <dd className={cx('my_dd')}><strong>Expert</strong>: html, css, javascript</dd>
                <dd className={cx('my_dd')}><strong>Intermediate</strong>: c++, react</dd>
                <dd className={cx('my_dd')}><strong>Basic</strong>: Unreal Engine, Flutter</dd>
                <dt className={cx('my_dt')}>Career</dt>
                <dd className={cx('my_dd')}><strong>Markup Developer</strong> 2020.01 ~ </dd>
            </dl>
        </section>
        <section id={"index-project"} className={cx('section_project')}>
            <h2 className={cx("section_title")}>Project</h2>
            <ProjectList projectData={projectData} />
        </section>
        <section id={"index-experience"} className={cx('section_experience')}>
            <h2 className={cx('section_title')}>Experience</h2>
            <ExperienceList experienceData={experieceData} />
        </section>
    </>
  )
}
