import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import '../style/info.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Info = () => {

  const port = "http://localhost:5000";

  const [info, setInfo] = useState({ bio: "", DOB: "", website: "", country: " ", language: " ", gender: " " })

  const setval = (e) => {
    const { name, value } = e.target

    setInfo(() => {
      return {
        ...info,
        [name]: value
      }
    })

  }

  const handlesubmit = async (e) => {
    e.preventDefault();

    const { bio, DOB, website, country, language, gender } = info

    if (DOB === '') {
      alert('Your Title is Required')
    } else if (gender === "") {
      alert('Your Description is Required')
    } else {
      const data = await fetch(`${port}/password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ bio, DOB, website, country, language, gender })
      })
      const res = await data.json()
      console.log(res)
      console.log(data)
    }
  }

  return (
    <>

      <div className='container' >

        <div className='formsContainer' >
          <TextField
            id="outlined-multiline-static"
            label="Bio"
            multiline
            sx={{ width: '72ch' }}
            rows={2}

            value={info.bio}
            name="bio"
            onChange={setval}

            defaultValue="The name’s John Deo. I am a tireless seeker of knowledge,occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly"
          />

          <div className='subform my-4' >
            <TextField
              sx={{ m: 1, width: '35ch' }}
              required
              id="outlined-required"
              label="Brith Date"
              defaultValue="02/05/2002"
              size="small"

              value={info.DOB}
              name="DOB"
              onChange={setval}
            />

            <TextField
              sx={{ m: 1, width: '35ch' }}
              required
              id="outlined-required"
              label="Phone"
              defaultValue="Phone"
              size="small"

              value={info.phone}
              name="phone"
              onChange={setval}
            />

            <TextField
              sx={{ m: 1, width: '35ch' }}
              required
              id="outlined-required"
              label="Website"
              defaultValue="Website"
              size="small"
              value={info.website}
              name=" website"
              onChange={setval}
            />

            <TextField
              sx={{ m: 1, width: '35ch' }}
              required
              id="outlined-required"
              label="country"
              defaultValue="DC123"
              size="small"
              value={info.country}
              name=" country"
              onChange={setval}
            />

            <div className='d-flex' >

              <TextField
                sx={{ m: 1, width: '35ch' }}
                required
                id="outlined-required"
                label="Language"
                defaultValue="Hindi"
                size="small"

                value={info.country}
                name=" country"
                onChange={setval}
              />

              <div className='mx-2' >

                <FormControl >
                  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group" >
                    <div className='d-flex' >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" /> </div>
                  </RadioGroup>
                </FormControl>

              </div>

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
