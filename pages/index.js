import Head from 'next/head'
import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import theme from '../components/theme'
import {PrimaryButton, Dropdown, DropdownMenuItemType} from '@fluentui/react'


const options =[
  { text:'Title', itemType: DropdownMenuItemType.Header},
  {text:'-', itemType:DropdownMenuItemType.Divider},
  {text:'New'},
  {text:'All'},
]

export default function Home(props) {
  theme()

  return (
      <><PrimaryButton>Hi</PrimaryButton> <Dropdown style={{width:300}} placeholder="select an aption" label="Dropdown" options={options}/></>
)
}
