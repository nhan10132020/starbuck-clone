import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/menuListData.json'
import Header from "../components/Header"
const ItemScreen = () => {
  let {type,id} = useParams()
  type = type.replaceAll("-","")
  const [item,setItem] = useState({})
  useEffect(()=>{
    //get Item
    data.map((items)=>{
        for(let i in items){
            if (i.toLowerCase()===type){
              items[i].map((eachItem)=>{
                if(eachItem.id ==id){
                  setItem(eachItem)
                }
              })
            }
        }
    })
  },[type,id])

  console.log(item)
  return (
    <div>
      <Header menuPage/>
    </div>
  )
}

export default ItemScreen