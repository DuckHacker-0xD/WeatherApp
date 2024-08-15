import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [weather, setWeather] = useState([])
	const tempNow = weather?.current?.temperature_2m
	const dayOrNight = weather?.current?.is_day
	const objDate = new Date()
	const days = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
	]
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'Август',
		'September',
		'October',
		'November',
		'December',
	]
	const currentDay = objDate.getDay()
	let bgImg = ''

	//fetch запрос API погоды
	const getApiData = async () => {
		const response = await fetch(
			'https://api.open-meteo.com/v1/forecast?latitude=54.02&longitude=38.16&current=temperature_2m,is_day&hourly=temperature_2m,rain&timezone=Europe%2FMoscow'
		)
		const data = await response.json()
		setWeather(data)
	}

	useEffect(() => {
		getApiData()
	}, [])

	if (tempNow >= 25) {
		bgImg = 'hot'
	} else if (tempNow >= 20) {
		bgImg = 'warm'
	} else if (tempNow >= 15) {
		bgImg = 'cool'
	} else if (tempNow >= 10) {
		bgImg = 'cold'
	} else {
		bgImg = 'veryCold'
	}

	return (
		<>
			<h1>Weather App</h1>
			<div className={`wrapper ${bgImg}`}>
				<h4>
					{`${days[currentDay]} ${objDate.getDate()} ${
						months[objDate.getMonth()]
					}`}
				</h4>
				<h3>{`${objDate.getHours()}:${objDate.getMinutes()}`}</h3>
				<p className='sity'>Новомосковск</p>
				{dayOrNight ? (
					<img
						src='https://cdn.discordapp.com/attachments/1140181408271302798/1273691220354535535/Here_comes_the_sun1.png?ex=66bf88e2&is=66be3762&hm=2082b02affb411bf813bbec4783b4c46912c3757afdfc5c19b55b66433208833&'
						alt='day/night'
					/>
				) : (
					<img
						src='https://cdn.discordapp.com/attachments/1140181408271302798/1273689710757285898/image.png?ex=66bf877b&is=66be35fb&hm=a7f0c6696ddd810d0e2053c522ec428dd239d8a0c5bd0c2941a665c462a65f72&'
						alt='day/night'
					/>
				)}

				<p className='temperature'>{tempNow} °C</p>

				<p className='day'>{days[currentDay]}</p>
				<div className='line'></div>
			</div>
		</>
	)
}

export default App
