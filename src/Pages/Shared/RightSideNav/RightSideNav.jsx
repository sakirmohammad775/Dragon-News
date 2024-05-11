import {FaFacebook, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h3 className="text-3xl">Login with</h3>
                <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Login with Google
                </button>
                <button className="btn btn-outline w-full">
               <FaGithub></FaGithub>
                Login with Github
                </button>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <h3 className="text-3xl">Find Us</h3>
                <a className='p-4 flex text-lg items-center border rounded-t-lg'  href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x rounded-t-lg '  href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-t-lg'  href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Facebook</span>
                </a>
                {/*q-zoon*/}
                <div>
                    <h3>Z-Qoon</h3>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;