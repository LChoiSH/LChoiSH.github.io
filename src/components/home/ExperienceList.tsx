import React from 'react';
import {NextPage} from "next";
import { Experience } from "@/types/experience";
import styles from './ExperienceList.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type ExperienceListProps = {
    experienceData: Experience[];
}

const ExperienceList: NextPage<ExperienceListProps> = ({ experienceData }) => {

    return (
        <ul className={cx("list_experience")}>
            {experienceData.map((experience) => {
                return (
                    <li key={`experience_${experience.name}`} className={cx("item_experience")}>
                        <h3 className={cx("experience_title")}>{experience.name}</h3>
                        <p className={cx("experience_date")}>{experience.date}</p>
                        <p className={cx("experience_info")}>{experience.info}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default ExperienceList;