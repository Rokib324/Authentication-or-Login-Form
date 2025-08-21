import React from 'react'

const Signup = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-135 from-primary via-secondary to-tertiary'>
        <div className='@container max-w-md w-full p-8 bg-blue-300 rounded-2xl shadow-2xl shadow-quaternary backdrop-blur-xl border border-white/50 relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary to-transparent rounded-2xl blur-3xl opacity-50'></div>
            <div className='relative'>
                <h3 className='text-3xl font-extrabold text-center mb-2 text-font-color tracking-tight'>Create an account</h3>
                <p className='text-center text-sm text-font-color-secondary mb-6'>Please fill in the form to create an account</p>
                <form className='mt-8 space-y-6 perspective-1000'>
                    <div className='group'>
                        <input type="text" placeholder='Full Name' className='w-full p-2 bg-gradient-to-r from-primary to-secondary rounded-xl text-black/70 placeholder-blue-400/50 outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent transition-all duration-300 ease-in-out'/>
                    </div>

                    <div className='group'>
                        <input type="email" placeholder='Email Address' className='w-full p-2 bg-gradient-to-r from-primary to-secondary rounded-xl placeholder-blue-400/50 text-black/70 outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent transition-all duration-300 ease-in-out'/>
                    </div>

                    <div className='group'>
                        <input type="password" placeholder='Password' className='w-full p-2 bg-gradient-to-r from-primary to-secondary rounded-xl placeholder-blue-400/50 text-black/70 outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent transition-all duration-300 ease-in-out'/>
                    </div>
                    <button className='relative group w-full p-4 mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl text-white font-bold text-lg hover:shadow-yellow-500/40 overflow-hidden transform-style-3d hover:translate-y-.5 hover:scale-105 hover:translate-z-20 transition-all duration-300 hover:shadow-lg cursor-pointer'>
                    <span className='relative z-10 pointer-events-none'>Create Account</span>
                    <span className='absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                       
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup