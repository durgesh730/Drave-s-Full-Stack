import React from 'react'
import pic from '../image/Avatar.png'
import '../style/account.css'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const Account = () => {
  return (
    <>

      <div className='container' >
        <div className='account' >

          <div className='imgSection' >
            <div><img src={pic} alt="img" /></div>

            <div className='butText' >
              <div className='buttons' >
                <div><button className='btn' > UPLOAD NEW PHOTOS </button></div>
                <div><button className='btnsec  ' > RESET </button></div>
              </div>

              <small>Allowed JPG, GIF or PNG. Max size of 800K</small>
            </div>
          </div>
        </div>

        <div className='forms' >
          <TextField
            sx={{ m: 1, width: '35ch' }}
            required
            id="outlined-required"
            label="username"
            defaultValue="123HELLO"
            size="small"
          />
          <TextField
            sx={{ m: 1, width: '35ch' }}
            required
            id="outlined-required"
            label="Name"
            defaultValue="Durgesh"
            size="small"
          />

          <TextField
            sx={{ m: 1, width: '35ch' }}
            required
            id="outlined-required"
            label="Email"
            defaultValue="123@gmaail.com"
            size="small"
          />

          <TextField
            sx={{ m: 1, width: '35ch' }}
            required
            id="outlined-required"
            label="Role"
            defaultValue="Web developer"
            size="small"
          />

          <TextField
            sx={{ m: 1, width: '35ch' }}
            required
            id="outlined-required"
            label="Status"
            defaultValue="Active"
            size="small"
          />

          <TextField
            sx={{ m: 1, width: '35ch' }}
            required
            id="outlined-required"
            label="Company"
            defaultValue="xxx"
            size="small"
          />

          <div className='alert my-4 '> 
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
          </div>

        </div>


        <div className='buttonsecond' >
          <div><button className='btn' > SAVE CHANGES </button></div>
          <div><button className='btnsec  ' > CANCEL </button></div>
        </div>

      </div>
    </>
  )
}

export default Account
