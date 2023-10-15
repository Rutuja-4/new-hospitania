import React from 'react';
import '../Style/order.css'
import Footer from '../Footer/Footer';

import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import DSSaha_TB from './DSSaha_TB';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <div>
            <div className='firstDiv'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm mt-4">
                            <h1 className="h3 mb-0">Wishlist</h1>
                        </div>
                        <div className="col-sm pt-5 mt-5">
                            <h5 >Orders</h5>
                            <p className='fontSizeP'> You have full control to manage your own Account.</p>
                        </div>
                        <div className="col-sm ms-5">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mt-5 text-white">
                                    <li className="breadcrumb-item fw-bold"> <HomeIcon /> Home</li>
                                    <li className="breadcrumb-item fw-bold">  <HomeIcon />  Account </li>
                                    <li className="breadcrumb-item active text-white" aria-current="page"> Wishlist </li>
                                </ol>
                            </nav>
                            <div>
                                <button type="button" className="btn blue-btn-TB"><KeyboardArrowLeftIcon />  Go Back </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='row'>
                    <div className="d-inline">
                        <DSSaha_TB />
                    </div>

                    <div className="col mt-4 mb-4  ">
                        <table className="table order-tb pl-5 ms-5">
                            <thead>
                                <tr>
                                    <td id='headings'> ORDER #</td>
                                    <td id='headings'> DATE PURCHASED</td>
                                    <td id='headings'> STATUS </td>
                                    <td id='headings'> TOTAL</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='orderId-TB'>
                                        <Link to='/orderDetails' className='links-TB'> 34VB5540K83 </Link>
                                    </td>
                                    <td>May 21, 2019</td>
                                    <td> <button className='btn1'>In Progress </ button> </td>
                                    <td>$358.75</td>

                                </tr>
                                <tr>
                                    <td className='orderId-TB'>
                                        <Link to='/orderDetails' className='links-TB'> 78A643CD409  </Link>
                                    </td>
                                    <td>December 09, 2018</td>
                                    <td> <button className='btn2'> Canceled</button> </td>
                                    <td> $760.50</td>

                                </tr>
                                <tr>
                                    <td className='orderId-TB'>
                                        <Link to='/orderDetails' className='links-TB'> 112P45A90V2  </Link>
                                    </td>
                                    <td>October 15, 2018</td>
                                    <td> <button className='btn3'> Delayed </ button> </td>
                                    <td>$1,264.00</td>

                                </tr>

                                <tr>
                                    <td className='orderId-TB'>
                                        <Link to='/orderDetails' className='links-TB'>28BA67U0981 </Link>
                                    </td>
                                    <td>July 19, 2018</td>
                                    <td> <button className='btn4'> Delivered </button> </td>
                                    <td>$198.35</td>

                                </tr>

                                <tr>

                                    <td className='orderId-TB'>
                                        <Link to='/orderDetails' className='links-TB' >502TR872W2  </Link>
                                    </td>
                                    <td>	April 04, 2018</td>
                                    <td> <button className='btn4'> Delivered </ button> </td>
                                    <td> $2,133.90</td>

                                </tr>

                                <tr>
                                    <td className='orderId-TB'>
                                        <Link to='/orderDetails' className='links-TB'> 47H76G09F33  </Link>
                                    </td>
                                    <td>March 30, 2018 </td>
                                    <td> <button className='btn4'> Delivered </ button> </td>
                                    <td> $86.40</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Order
