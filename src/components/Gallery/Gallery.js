import useData from '../../hooks/useData';
import Images from '../Images/Images'; 
import { Row } from 'react-bootstrap';

// Gallery Section 
const Gallery = () => {
    const [data] = useData();
    return (
        <Row xs={1} md={3} className="g-4">
        {
            data.map((course) =><Images
            key={course.key}
            course={course}
            ></Images> 
        )    
        }
    </Row>
    );
};

export default Gallery;