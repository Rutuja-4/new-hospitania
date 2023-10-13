import React, { Component } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ContactsIcon from '@mui/icons-material/Contacts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import '../Style/DS-TB.css'
export default class DSSaha_TB extends Component {
    render() {
        return (
            <div>

                <div className="row">

                    <div className="col-lg-3">

                        <ul className="list-group">

                            <li className="list-group-item ">


                                <div class="d-flex align-items-center p-3">
                                    <button className="DS-TB btn">DS</button>
                                    <div class="ml-2 ms-3">
                                        <h6 class="m-0">Deep Saha</h6>
                                        <small>yourmail@email.com</small>
                                    </div>
                                </div>


                            </li>
                            <li className="list-group-item"> <PersonIcon />  My Account <span className='arrow-TB'> <ChevronRightIcon />  </span>      </li>
                            <li className="list-group-item"> <LockIcon /> Password <span className='arrow-TB'> <ChevronRightIcon />  </span>   </li>
                            <li className="list-group-item"> <ContactsIcon /> Address <span className='arrow-TB'> <ChevronRightIcon />  </span>   </li>
                            <li className="list-group-item"> <ShoppingCartIcon />Order <span className='arrow-TB'> <ChevronRightIcon />  </span>   </li>
                            <li className="list-group-item wl"> <FavoriteIcon /> Wishlist <span className='arrow-TB'> <ChevronRightIcon />  </span>   </li>
                            <li className="list-group-item"> < LogoutIcon /> Logout  <span className='arrow-TB'> <ChevronRightIcon />  </span>  </li>

                        </ul>
                        {/* <div className="col">
                        <li className="list-group-item">    <ChevronRightIcon />  </li>
                        <li className="list-group-item">    <ChevronRightIcon />  </li>
                        <li className="list-group-item">    <ChevronRightIcon />  </li>
                        <li className="list-group-item">    <ChevronRightIcon />  </li>
                        <li className="list-group-item">    <ChevronRightIcon />  </li>
                        <li className="list-group-item">    <ChevronRightIcon />  </li>

                    </div> */}
                    </div>





                </div>
            </div>
        )
    }
}
