import React from 'react';
import BlackInput from './BlackInput';

const SignInPage = ({handleSubmit, history})=>{
    function onSubmit(event) {
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const formValues={
            email: formData.get('email'),
            password: formData.get('password')
        }
        handleSubmit(formValues)
        history.push('/auctions'); 
    }

    return(
        <main>
        
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='email'>Email *</label><br/>
                <input id='email' type='email' name='email' />
            </div>
            <br/>
            <div>
                <label htmlFor='password'>Password *</label><br/>
                <input id='password' type='password' name='password' />
            </div>
            <br/>
            <BlackInput type='submit' value='Sign In' />
        </form>
        </main>
    )
}
export default SignInPage;