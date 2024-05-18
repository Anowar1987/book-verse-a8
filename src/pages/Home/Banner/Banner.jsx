import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/Banner.jpg';

const Banner = () => {
    return (
        <div className="flex ml-32 mr-32 mt-16 bg-[#1313130d] rounded-3xl">
            <div className="p-16">
            <h2 className="mt-28 mb-14 font-bold text-5xl text-[#131313] text-center">Books to freshen <br />up your bookshelf</h2>

            <Link to={`/listedbooks`}>
            <button className="btn font-bold text-xl bg-[#23BE0A]">View The List</button>
            
            </Link>
            
            </div>
            <div className="p-20">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;