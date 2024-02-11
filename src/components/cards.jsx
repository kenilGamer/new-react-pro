/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-36 px-10 flex max-md:flex-col gap-0.5 '>
            <Card width={"w-4/12"} srart={false} para={true}  />
            <Card width={"w-8/12"} srart={true} para={false} hover="true"/>
        </div>
    </div>
  )
}

export default Cards