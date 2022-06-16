import React from 'react';
import styles from '../../styles/CourseCard.module.css'

import Router from 'next/router'

function CardElement({ data }) {

    function onClick() {

        const router = Router.push

        router({
            pathname: `/lobby/${data.id}`,
            query: {
                id: data.id,
                course_id: data.course_id,
                taught_by: data.taught_by,
                course_section: data.course_section,
                course_title: data.course_title,
            },
        })
    }

    return (
        <div class="flex px-10 py-2">
            <a onClick={onClick}
                class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div id="color_id" className={styles.color_id} />

                <div class=" flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.course_title}</h5>
                    <p class="mb-2 text-2xl tracking-tight text-gray-500 dark:text-white">{data.course_section}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.course_description}</p>

                    <div class="flex items-center">
                        <div>
                            <strong>Profesor: </strong>
                            <span>{data.taught_by}</span>
                        </div>
                    </div>

                </div>
            </a>
        </div>
    );
}

export default CardElement;
