import Qrcodegen from  '../../components/QRcode';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';


export default function Qrcode(){
    const [name, setname] = useState("hi");
    const router = useRouter()
    const { petname } = router.query


    
    console.log(petname)

    if(petname){
    return(

        
        <div>
        <Qrcodegen obj={petname} />
        </div>
    )
    }
}