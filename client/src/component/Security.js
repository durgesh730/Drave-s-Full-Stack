import React, { useState } from 'react'
import IC from '../image/pose_m1.png'
import TextField from '@mui/material/TextField';
import '../style/security.css'
import { BiLockOpen } from 'react-icons/bi';

const Info = () => {


  const port = "http://localhost:5000"

  const [pass, setPass] = useState({Currpassword: "", Newpassword: "", Conpassword: "" })

  const setval = (e) => {
    const { name, value } = e.target

    setPass(() => {
      return {
        ...pass,
        [name]: value
      }
    })

  }

  const handlesubmit = async (e) => {
    e.preventDefault();

    const { Currpassword, Newpassword, Conpassword } = pass

    if (Currpassword === '') {
      alert('Your Title is Required')
    } else if (Newpassword === "") {
      alert('Your Description is Required')
    } else {
      const data = await fetch(`${port}/password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ Currpassword, Newpassword, Conpassword })
      })
      const res = await data.json()
      console.log(res)
      console.log(data)
    }
  }


  return (
    <>

      <div className='container' >
        <div className='PassImg' >
          <div className='inputPass' >

            <TextField
              sx={{ m: 1, width: '35ch' }}
              required
              id="outlined-required"
              label="Current Password"
              value={pass.Currpassword}
              name="Currpassword"
              defaultValue="Current Password"
              size="small"
              onChange={setval}
            />
            <TextField
              sx={{ m: 1, width: '35ch' }}
              required
              id="outlined-required"
              value={pass.Newpassword}
              name="Newpassword"
              label="New Password"
              defaultValue="New Password"
              size="small"
              onChange={setval}
            />

            <TextField
              sx={{ m: 1, width: '35ch' }}
              required
              id="outlined-required"
              label="Conform Password"
              value={pass.Conpassword}
              name="Conpassword"
              defaultValue="Conform Password"
              size="small"
              onChange={setval}
            />

          </div>

          <div> <img src={IC} alt=" img" /></div>
        </div>
        <hr></hr>


        <div className='auth' >
          <div>
            <h4>Two-factor authentication</h4>
          </div>

          <div className='text-center my-4 ' >
            <div>
              <BiLockOpen />
            </div>
            <div> <span>Two factor authentication is not enabled yet.</span> </div>
            <div className='my-2 para ' >
              <span>
                Two-factor authentication adds an  <br /> additional layer of
                security to your  account by <br /> requiring  more than just a
                password to log in. Learn more.
              </span>
            </div>
          </div>
        </div>

        <div className='buttonsecond' >
          <div><button className='btn' onClick={handlesubmit} > SAVE CHANGES </button></div>
          <div><button className='btnsec  ' > CANCEL </button></div>
        </div>

      </div>
    </>
  )
}

export default Info
