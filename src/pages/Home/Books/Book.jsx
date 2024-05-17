import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {id, image, tags, book_Name, author, category, rating} = book;
   
    return (
        <div className="p-6 box-border border-[1px solid white]">
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="bg-[#F3F3F3] rounded-r-2xl p-6 w-[200px] h-[150px] mt-4 ml-10"><img src={image} alt="Shoes" /></figure>
           <Link to={`/book/${id}`}>
           <p className="ml-8 mt-4 text-base font-medium text-[#23BE0A]"># {tags}</p>
            <div className="card-body">
            <h2 className="text-2xl font-bold text-[#131313]">{book_Name}</h2>
            <p className="text-base font-medium text-[#131313cc]">By: {author}</p>
            <div className="flex">
            <p>{category}</p>
            <p>{rating}</p>
            </div>
            </div>
           </Link>
            </div>
        </div>
        
    );
};

export default Book;