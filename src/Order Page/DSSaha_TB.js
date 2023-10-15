import React, { Component } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ContactsIcon from '@mui/icons-material/Contacts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import '../Style/DS-TB.css';

export default class DSSaha_TB extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group ds-table ">
                            <li className="list-group-item">
                                <div className="d-flex align-items-center p-3">
                                    <button className="DS-TB btn">DS</button>
                                    <div className="ml-2 ms-3">
                                        <h6 className="m-0">Deep Saha</h6>
                                        <small>yourmail@email.com</small>
                                    </div>
                                </div>
                            </li>
                            {this.renderListItem(<PersonIcon />, 'My Account')}
                            {this.renderListItem(<LockIcon />, 'Password')}
                            {this.renderListItem(<ContactsIcon />, 'Address')}
                            {this.renderListItem(<ShoppingCartIcon />, 'Order')}
                            {this.renderListItem(<FavoriteIcon />, 'Wishlist', 'wl')}
                            {this.renderListItem(<LogoutIcon />, 'Logout')}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    renderListItem(icon, text, customClass ='') {
        return (
            <li className={`list-group-item ds-list ${customClass}`} key={text}>
                <div className="d-flex align-items-center">
                    <span>{icon}</span>
                    <span className="text ps-3">{text}</span>
                    <div className='arrow-TB ml-auto'> <ChevronRightIcon /> </div>
                </div>
            </li>
        );
    }
}

