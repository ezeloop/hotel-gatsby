import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import { Global, css } from '@emotion/react';


const Layout = (props) => {
    return ( 
        <>
            <Global 
                styles={css `
                    html {
                        font-size: 62.5%;
                    }
                
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }

                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }

                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    `}
            />
            <Helmet>
                <title>Gatsby Hotel</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" rel="stylesheet"  />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />
            {props.children}
        </>

     );
}
 
export default Layout;