/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-3 '>
            <Card width={"basis-0.5/3"} srart={false} para={true}  />
            <Card width={"basis-2/3"} srart={true} para={false} hover="true"/>
        </div>
    </div>
  )
}

export default Cards