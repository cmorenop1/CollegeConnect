import { useRouter } from "next/router"
import Navbar from "../../components/Navbar"
import CourseHeader from "../../components/course/CourseHeader"

export default function DynamicPage() {

    const router = useRouter()
    const {
        query: {
            id,
            course_id,
            taught_by,
            course_section,
            course_title,
           
        },
    } = router

    const data = {
        id,
        course_id,
        taught_by,
        course_section,
        course_title,        
    }


    return (
        <div>
            <Navbar />
            <CourseHeader data={data} />

            <div>
                content goes here for the course {course_id}
            </div>
        </div>
    )
}

