import Head from 'next/head'
import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import {PrimaryButton} from '@fluentui/react'


export default function Home(props) {

  const myTheme = createTheme({
  palette: {
    themePrimary: '#d40000',
    themeLighterAlt: '#fdf3f3',
    themeLighter: '#f8d0d0',
    themeLight: '#f2a9a9',
    themeTertiary: '#e55c5c',
    themeSecondary: '#d91a1a',
    themeDarkAlt: '#be0000',
    themeDark: '#a10000',
    themeDarker: '#770000',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  }});
  return (
      <div ><PrimaryButton>Hi</PrimaryButton></div>)})}</div>
)
}
