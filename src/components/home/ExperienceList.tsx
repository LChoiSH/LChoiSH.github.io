import React, {useState} from 'react';
import {NextPage} from "next";
import { Experience } from "@/types/experience";
import styles from './ExperienceList.module.scss';
import classNames from "classnames/bind";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles);

export type ExperienceListProps = {
    experienceData: Experience[];
}

export type ExperienceItemProps = {
    experience: Experience;
}

function ExperienceItem({ experience }: ExperienceItemProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={cx("item_experience", isOpen ? "is_open" : "")}>
            <button type="button" onClick={() => setIsOpen(!isOpen)} className={cx("button_open")}>
                <span className="blind">{isOpen ? "close" : "open"}</span>
                {
                    isOpen ?
                        (<DownOutlined className={cx("ico_open")} />)
                        : (<UpOutlined className={cx("ico_open")} />)
                }
            </button>
            <h3 className={cx("experience_title")}>{experience.name}</h3>
            <p className={cx("experience_date")}>{experience.date}</p>
            <div className={cx("info_wrap")}>
                {experience.thumbnailSrc ?
                    (
                        <div className={cx("image_wrap")}>
                            <img src={`image/experience${experience.thumbnailSrc}`} alt={`${experience.name} 이미지`} className={cx("experience_image")} width={100} height={100} />
                        </div>
                    )
                    :
                    ""
                }
                <p className={cx("experience_info")}>{experience.info}</p>
            </div>
        </li>
    )
}

const ExperienceList: NextPage<ExperienceListProps> = ({ experienceData }) => {

    return (
        <ul className={cx("list_experience")}>
            {experienceData.map((experience) => (<ExperienceItem key={`experience_${experience.name}`} experience={experience} />))}
        </ul>
    )
}

export default ExperienceList;