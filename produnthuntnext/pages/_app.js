import App from 'next/app';
import firebase, { firebaseContext } from '../firebase'

const MyApp = (props) => {

    const {Component, pageProps} = props;

    return(
        <firebaseContext.Provider
            value={{
                firebase
            }}
        >

            <Component {...pageProps}/>
        </firebaseContext.Provider>
    )


}

export default MyApp;