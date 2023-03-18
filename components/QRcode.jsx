import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import QRCode from 'qrcode'
import { useState,useEffect } from 'react'





export default function Qrcodegen({obj}) {
	console.log(obj)
  
//   const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')
	
	
	const GenerateQRCode = () => {
		QRCode.toDataURL(obj, {
			width: 800,
			margin: 2,
			color: {
				dark: '#FFFFFFFF',
				light: '#000000ff'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	


	useEffect(() => {
		GenerateQRCode()
	}	, [])


	return (
		<div className="app">
			{/* <h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button> */}
			{qr && <>
				<img src={qr} className="h-1/3  aspect-square" />
				{/* <a href={qr} download="qrcode.png">Download</a> */}
			</>}
		</div>
	)


}