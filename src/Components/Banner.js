import axios from 'axios'
import React,{useEffect,useState} from 'react'
import instance from '../axios'
// import axios from '../axios'
import {API_KEY,baseUrl} from '../constants/constants'
import './Banner.css'

function Banner() {

    const[movie, setMovie]=useState()
    useEffect(() => {
        // axios.get(`${instance.ins}trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        //     console.log(response.data)
        // })
        axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then(response => setMovie(response.data)).catch(err => console.log("error found"))
    },[])
     
   
        const {result}=movie
        let c = result.map((obj)=>{
            <h1>obj.title</h1>
        })

    return (
        <div className="banner">
            <div className="content">
                <h1 className="title"> {c}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aperiam quam nostrum assumenda explicabo similique!</h1>
            </div>
            <div className="fade_button"></div>
        </div>
    )
}

export default Banner
