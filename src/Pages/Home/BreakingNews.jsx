
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn-secondary">Breaking news</button>
            <Marquee pauseOnHover={true} speed={50}>
             Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;