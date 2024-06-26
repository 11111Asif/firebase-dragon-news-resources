import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div className="">
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full"><FaGoogle></FaGoogle>Login With Google</button>
                <button className="btn btn-outline w-full"><FaGithub></FaGithub>Login With Github</button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg bg-slate-100" href="">
                    <FaFacebook className="mr-3 "></FaFacebook>
                    <span> Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border rounded-t-lg bg-slate-100" href="">
                <FaTwitter className="mr-3"></FaTwitter>
                    <span> Twitter</span>
                </a>
                
                <a className="p-4 flex text-lg items-center border rounded-t-lg bg-slate-100" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span> Instagram</span>
                </a>
                
                
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q Zone</h2>
               <img src={qzone1}></img>
               <img src={qzone2}></img>
               <img src={qzone3}></img>
            </div>
        </div>
    );
};

export default RightSideNav;