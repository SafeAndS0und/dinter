import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'

const Page = styled.div`
   max-width: 600px;
   display: block;
   margin: 70px auto 0 auto;
`

export default ({children}) => {

   return (
      <div className="layout-main">
         <Navbar/>
         <Page>
            {children}
         </Page>
      </div>
   )
}