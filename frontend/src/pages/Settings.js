import React from 'react'
import './settings.css'
import Sidebar from './sidebar/Sidebar'

function Settings() {
  return (
    <div className='settings'>
      <div className='settingswrapper'>
       <div className='settingstitle'>
         <span className='settingseditTitle'>update ur Account</span>
         <span className='settingsdeleteTitle'>Delete ur Account</span>
       </div>
       <form className='settingsform'>
        <label>Profile Picture</label>
        <div className='settingsPP'>
          <img className='settingsimg' src='/images/gallery5.jpeg' alt='profile' />
          <label htmlFor='inputfile'><i className='settingsPPIcon fa fa-user-circle'></i></label>
          <input id='inputfile' className='inputfile' type='file' style={{display: 'none'}} />
        </div>
        <label>Username</label>
        <input type='text' placeholder='username' />
        <label>Email</label>
        <input type='email' placeholder='example@gmail.com' />
        <label>Password</label>
        <input type='password' />
        <button className='settingsBtn'>Submit</button>
       </form>
    </div>
    <Sidebar />
    </div>
  );
}

export default Settings;