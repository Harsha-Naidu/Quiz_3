import React from 'react';
import {Route, Redirect} from 'react-router-dom'



const AuthRoute = props =>{
    console.log('props:', props)
    const {isAuth, component:Component, ...restProps} =props
    console.log('restProps:', restProps)
    return(
        <Route 
        {...restProps}
        render={
            (routeProps)=>{
                console.log('routeprops:' ,routeProps)
                if (isAuth){
                    return <Component {...routeProps}/>

                }else{
                    return <Redirect to='/sign_in' />
                }
            }  
        }
        />
    )
}
export default AuthRoute;