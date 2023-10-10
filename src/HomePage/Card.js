import React from 'react'
import style from '../Style/Card.module.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, image ,link}) => {

	const navigate = useNavigate()

	const handleNavigate = () => {
	  navigate('/shoppage')
	}


	return (
		<div>
			<div className={style.card}>
				<img className={style.cardImage} src={image} alt="" onClick={handleNavigate}/>
				<h4 className={style.cardText}>{title}</h4>
				<a className={style.link}>{link}</a>
			</div>
		</div>
	)
}

export default Card
