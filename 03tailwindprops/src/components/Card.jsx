
import React, { Component } from 'react'

function Card({member, designation="CTO"}){
    

    return (
        <>
       <li>
        <div className="flex items-center gap-x-6">
          <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{member}</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">{designation||"CTO"}</p>
          </div>
        </div>
      </li>
        </>
    )
}

export default Card;