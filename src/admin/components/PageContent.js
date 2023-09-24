import React, { Children } from 'react'

function PageContent(props) {
    const {cl, id} = props

  return (
    <div className={cl} id={id}>
        {props.children}
    </div>


  )
}

export default PageContent