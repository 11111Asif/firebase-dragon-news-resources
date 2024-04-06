import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-10'>
            <img src={logo}></img>
            <p className="">Journalism Without Fear or Favour</p>
            <p className="text-xl ">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;