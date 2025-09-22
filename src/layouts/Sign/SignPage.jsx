import React from 'react'
import SigninForm from './SigninForm';

const SignPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='rounded-xl shadow-xl bg-neutral-200 p-8'>
            <SigninForm/>
        </div>
    </div>
  )
}

export default SignPage;