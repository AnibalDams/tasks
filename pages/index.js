import Head from 'next/head'
import React, {useEffect} from 'react'
import fetch from 'isomorphic-unfetch'
import theme from '../components/theme'
import {PrimaryButton, Dropdown, DropdownMenuItemType} from '@fluentui/react'


const options =[
  { text:'Title', itemType: DropdownMenuItemType.Header},
  {text:'-', itemType:DropdownMenuItemType.Divider},
  {text:'New'},
  {text:'All'},
]
const id = 1
export default function Home(props) {
  
  theme()

  return (
      <>{props.users.map(user => {
        return (
          <div key={user.id}><h1>{user.userName}</h1> <p>{user.email}</p></div>
        );
      })}<PrimaryButton>Hi</PrimaryButton> <Dropdown style={{width:300}} placeholder="select an aption" label="Dropdown" options={options}/></>
)
}

Home.getInitialProps = async () =>{
  const res = await fetch('http://localhost:5000/users')
  const resJson = await res.json()
  return {users:resJson}
}
