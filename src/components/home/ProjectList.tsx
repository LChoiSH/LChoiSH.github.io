import React from 'react';
import {NextPage} from "next";
import { Project } from "@/types/project";
import styles from './ProjectList.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type ProjectListProps = {
    projectData: Project[];
}

const ProjectList: NextPage<ProjectListProps> = ({ projectData }) => {

    return (
        <ul className={cx('project_list')}>
            {projectData.map((project) => {
                return (
                    <li key={`project_${project.name}`} className={cx("project_item")}>
                        <a href="#" className={cx("project_detail_link")}>
                            <div className={cx("project_image_wrap")}>
                                <img src={`image/project/${project.name.toLowerCase()}${project.thumbnailSrc ? project.thumbnailSrc : project.detail[0].imageSrc}`} alt={`${project.name} 디테일 이미지`} className={cx("project_image")}/>
                            </div>
                            <div className={cx("project_info_wrap")}>
                                <strong className={cx("project_title")}>{project.name}</strong>
                                <p className={cx("project_date")}>{project.date}</p>
                                <p className={cx("project_summary")}>{project.summary}</p>
                                <ul className={cx("tag_list")}>
                                    {project.tag.map((tag) => {
                                        return (
                                            <li key={`project_${project.name}_${tag}`} className={cx("tag_item")}>{tag}</li>
                                        )
                                    })}
                                </ul>
                                <p className={cx("product_more")}>자세히 보기</p>
                            </div>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default ProjectList;