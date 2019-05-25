import React from 'react'
import Helmet from "react-helmet"

export default ({styleUrl}) => {
    console.log("style url:", styleUrl)
    return (
        <Helmet>
            <link rel="stylesheet" href={styleUrl} />
        </Helmet>
    )
}