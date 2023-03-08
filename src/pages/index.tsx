import Head from 'next/head'
import { Inter } from 'next/font/google'
import classNames from "classnames/bind";
import styles from './index.module.scss';

const cx = classNames.bind(styles);
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <div className={cx("animation_intro")}>
            <h2 className={cx("home_title")}>
                안녕하세요<br />
                최성훈의 페이지입니다
            </h2>
        </div>
        <section className={cx('section_my')}>
            <h3 className="blind">인적사항</h3>
            <div className={cx("my_image_wrap")}>
                <img src="/image/home/home_my.jpeg" alt="home my image" className={cx("my_image")} />
            </div>
            <dl className={cx("my_dl")}>
                <dt className={cx('my_dt')}>Contact</dt>
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
        <section className={cx('section_project')}>
            <h2 className={cx("section_title")}>Project</h2>
            <ul className={cx("project_list")}>
                <li className={cx("project_item")}>
                    <a href="#" className={cx("project_detail_link")}>
                        <div className={cx("project_image_wrap")}>
                            <img src="https://via.placeholder.com/300x300" alt="임시 이미지" className={cx("project_image")}/>
                        </div>
                        <div className={cx("project_info_wrap")}>
                            <strong className={cx("project_title")}>Stock Memo</strong>
                            <p className={cx("project_date")}></p>
                            <ul className={cx("tag_list")}>
                                <li className={cx("tag_item")}>FrontEnd</li>
                                <li className={cx("tag_item")}>App Developer</li>
                            </ul>
                            <p className={cx("product_more")}>More Info</p>
                        </div>
                    </a>
                </li>
                <li className={cx("project_item")}>
                    <a href="#" className={cx("project_detail_link")}>
                        <div className={cx("project_image_wrap")}>
                            <img src="https://via.placeholder.com/300x300" alt="임시 이미지" className={cx("project_image")}/>
                        </div>
                        <div className={cx("project_info_wrap")}>
                            <strong className={cx("project_title")}>Stock Memo</strong>
                            <ul className={cx("tag_list")}>
                                <li className={cx("tag_item")}>FrontEnd</li>
                                <li className={cx("tag_item")}>App Developer</li>
                            </ul>
                            <p className={cx("product_more")}>More Info</p>
                        </div>
                    </a>
                </li>
                <li className={cx("project_item")}>
                    <a href="#" className={cx("project_detail_link")}>
                        <div className={cx("project_image_wrap")}>
                            <img src="https://via.placeholder.com/300x300" alt="임시 이미지" className={cx("project_image")}/>
                        </div>
                        <div className={cx("project_info_wrap")}>
                            <strong className={cx("project_title")}>Stock Memo</strong>
                            <ul className={cx("tag_list")}>
                                <li className={cx("tag_item")}>FrontEnd</li>
                                <li className={cx("tag_item")}>App Developer</li>
                            </ul>
                            <p className={cx("product_more")}>자세히 보기</p>
                        </div>
                    </a>
                </li>
                <li className={cx("project_item")}>
                    <a href="#" className={cx("project_detail_link")}>
                        <div className={cx("project_image_wrap")}>
                            <img src="https://via.placeholder.com/300x300" alt="임시 이미지" className={cx("project_image")}/>
                        </div>
                        <div className={cx("project_info_wrap")}>
                            <strong className={cx("project_title")}>Stock Memo</strong>
                            <ul className={cx("tag_list")}>
                                <li className={cx("tag_item")}>FrontEnd</li>
                                <li className={cx("tag_item")}>App Developer</li>
                            </ul>
                            <p className={cx("product_more")}>자세히 보기</p>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <section className={cx('section_intro')}>
            <h3 className={cx('title')}>교육</h3>
            <div>
                experience
                DDoS
                Bootcamp
            </div>
            <div>
                <ul className={cx("list_project")}>
                    <li className={cx("item_project")}>
                        <div className={cx("thumb_image_wrap")}>
                            <img src="https://via.placeholder.com/200x200" alt="임시 이미지"/>
                        </div>
                        <div className={cx("info_wrap")}>
                            <strong className={cx("project_title")}>StockMemo</strong>
                            <p className={cx("project_info")}>분류: Frontend</p>
                            <p className={cx("project_info")}>역할: </p>
                        </div>
                        <a href="#">자세히보기</a>
                    </li>
                </ul>
                project + 자세히 보기

                StockMemo

                StockGG

                ClubRadio
            </div>
            <div>
                skills
            </div>
        </section>
    </>
  )
}
