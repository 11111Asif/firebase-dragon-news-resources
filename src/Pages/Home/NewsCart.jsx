import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const NewsCart = ({news}) => {
    const {title, image_url, details, _id} = news
    return (
        <div>
     <div className="card bg-base-100 shadow-xl mb-16 border-b-2">
        <figure><img src={image_url} alt="Shoes" /></figure>
          <div className="card-body">
             <h2 className="card-title">{title}</h2>
               <p>
                {details.length > 200 ? <p>{details.slice(0, 200)}<Link to={`/news/${_id}`}>Read more...</Link></p>: <p>{details}</p>}
               </p>
              <div className="card-actions justify-end">
             <button className="btn btn-primary">Buy Now</button>
         </div>
       </div>
     </div>
        </div>
    );
};

NewsCart.propTypes = {
    news: PropTypes.object.isRequired
}

export default NewsCart;