import React from 'react'
import '../style/navbar.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLockOpen } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <div className='Navbar'>
                    <div>
                        <Link to="/"> <AiOutlineSearch /> ACCOUNT</Link>
                    </div>

                    <div>
                        <Link to="/sec" > <BiLockOpen /> SECURITY</Link>
                    </div>

                    <div>
                        <Link to='/info' > <AiOutlineInfoCircle /> INFO</Link>
                    </div>

                    <div>
                        <a href='' >  <BsBookmark /> BILLING</a>
                    </div>

                    <div>
                        <a href='' >  <IoIosNotificationsOutline /> NOTIFICATIONS</a>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default Navbar
