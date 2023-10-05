import React from 'react' ;
import '../Style/order.css'
import Footer from '../Footer/Footer';

const Order = () => {
    return (
        <div>
            <div className='firstDiv'>
                {/* <h2> Wishlist </h2> */}
            </div>

            <table class="table">
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
                        <td> <a href="#"> 34VB5540K83 </a></td>
                        <td>May 21, 2019</td>
                        <td> <button className='btn1'>In Progress </ button> </td>
                        <td>$358.75</td>

                    </tr>
                    <tr>
                        <td>  <a href="#"> 78A643CD409 </a> </td>
                        <td>December 09, 2018</td>
                        <td> <button className='btn2'> Canceled</button> </td>
                        <td> $760.50</td>

                    </tr>
                    <tr>
                        <td> <a href="#"> 112P45A90V2 </a> </td>
                        <td>October 15, 2018</td>
                        <td> <button className='btn3'> Delayed </ button> </td>
                        <td>$1,264.00</td>

                    </tr>

                    <tr>
                        <td> <a href="#"> 28BA67U0981 </a> </td>
                        <td>July 19, 2018</td>
                        <td> <button className='btn4'> Delivered </button> </td>
                        <td>$198.35</td>

                    </tr>

                    <tr>
                        
                        <td><a href="#"> 502TR872W2 </a> </td>
                        <td>	April 04, 2018</td>
                        <td> <button className='btn4'> Delivered </ button> </td>
                        <td> $2,133.90</td>

                    </tr>

                    <tr>
                        <td> <a href="#"> 47H76G09F33</a></td>
                        <td>March 30, 2018 </td>
                        <td> <button className='btn4'> Delivered </ button> </td>
                        <td> $86.40</td>

                    </tr>
                </tbody>
            </table>
            
            <Footer />
        </div>
    )
}

export default Order
