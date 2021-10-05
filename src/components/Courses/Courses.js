import { Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import Course from '../Course/Course';

// Display Course Components
const Courses = () => {
    const [data] = useData();
    return (
        <Row xs={1} md={3} className="g-4">
        {
            data.map((course) =><Course
            key={course.key}
            course={course}
            ></Course> 
        )    
        }
    </Row>
    );
};

export default Courses;