import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { IoBagAddOutline } from "react-icons/io5";
import './Products.css'
// import Card from '../components/Card';
export default function Products({result}) {
  return (
    <section className='card-container'>
      {result}
    </section>
  )
}
