
import { TextField , Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

// import material ui text field


function App() {
  // we need 4 state. For to store principle ammout, rate, year and interested amount

  // interest
  const [interest, setInterest] = useState(0)
  // principle amount
  const [principle, setPrinciple] = useState(0)
  // rate
  const [rate, setRate] =useState(0)
  // year
  const [year, setYear] = useState(0)


  // create a state for check invalid principle
  const [invalidPrinciple, setinvalidPrinciple]=useState(false)

  // create a state for check invalid rate
  const [invalidRate, setinvalidRate]=useState(false)

  // create a state for check invalid year
  const [invalidYear, setinvalidYear]=useState(false)


  // define function for validate 

  const validateInput =(inputTag)=>{
    //first take input field and check what is the type of thhat
      console.log(inputTag, typeof inputTag);
      
      // here we apply same validataion for all fields. Then we want to take both value and name. the name is set using name attribute in textfield
      const{value, name}=inputTag

      // to validate input
      console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

      // or use /d instead of [0-9]
      console.log(!!value.match(/^\d+(\.\d+)?$/));

      // apply condition for check

      if(name=="principle"){
        // take value
           setPrinciple(value)
          //  check condition
           if(!!value.match(/^\d+(\.\d+)?$/)){
               setinvalidPrinciple(false)
           }
           else{
            setinvalidPrinciple(true)
      }
      }else if(name=="rate"){
        // take value
           setRate(value)
          //  check condition
           if(!!value.match(/^\d+(\.\d+)?$/)){
               setinvalidRate(false)
           }
           else{
            setinvalidRate(true)
      }    
  }else if(name=="year"){
    // take value
       setYear(value)
      //  check condition
       if(!!value.match(/^\d+(\.\d+)?$/)){
           setinvalidYear(false)
       }
       else{
        setinvalidYear(true)
  }    

}
}

// function for calculate simple interest

const handleCalculate = (e)=>{

  // predefined method for html for unwanted errors at form 
  e.preventDefault()
  console.log("Button clicked");

  // check all fields are filled or not by using name
  if(principle && rate && year ){
    // calculate interest
   setInterest(principle*rate*year/100)
  }else{
    alert("Please fill the form completely")
  }
  
}


// function to reset the page 
// clear all thr fields and interest
const handleReset =()=>{
     setInterest(0)
     setPrinciple(0)
     setRate(0)
     setYear(0)
     setinvalidPrinciple(false)
     setinvalidRate(false)
     setinvalidYear(false)
    }

  return (
    <>
      <div style={{width:'100%', minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your Simple Interest Easily !</p>
          <div className='bg-warning p-3 rounded text-center'>
            <h1> {interest}</h1>
            <p className='fw-bolder'>Total simple interest</p>
          </div>

          {/* form  for enter amount */}
          <form className='mt-5'>
             
             {/* principle amount */}
          <div className='mb-3 '>
            <TextField onChange={(e)=>validateInput(e.target)} value={principle || ""}  name='principle' className='w-100' id="outlined-principle" label=" ₹ Principle Amount" variant="outlined" />
            </div>

            {/* ***************************for invalid message******************************* */}

            {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>
              Invalid Principle ammout
            </div>
            }

              {/* Rate */}
          <div className='mb-3 '>
            {/* value attribute to show placeholder when reset click */}
            <TextField className='w-100'onChange={(e)=>validateInput(e.target)} value={rate || ""} name='rate' id="outlined-rate" label="Rate of Interest (%)" variant="outlined" />
            </div>

             {/* ***********************for invalid message*********************************** */}

             {invalidRate && <div className='text-danger fw-bolder mb-3'>
              Invalid Rate ammout
            </div>
            }

              {/*year */}
          <div className='mb-3 '>
            <TextField className='w-100' onChange={(e)=>validateInput(e.target)} value={year || ""}  name='year' id="outlined-year" label=" Time Period (Yr)" variant="outlined" />
            </div>

             {/* *********************for invalid message******************************* */}

             {invalidYear && <div className='text-danger fw-bolder mb-3'>
              Invalid Year
            </div>
            }

            {/* buttons */}

            {/* first import stack  */}
            <Stack direction="row" spacing={2}>

              {/* ***************************button************************************** */}

              {/* disable the button if any one input field is invalid */}
              {/* give button type submmit for give alert and submited message */}
              {/* onclick for event occur at click on button */}
              {/* **************************************************************************************** */}

              <Button type='submit' disabled={invalidPrinciple || invalidRate || invalidYear} onClick={handleCalculate} variant="contained" className='w-50 bg-dark'>Calculate</Button>
              
              <Button onClick={handleReset} variant="outlined" className='w-50 text-dark border-dark'>Reset</Button>
 
            </Stack>
          </form>

        </div>
      </div>
    </>
  )
}

export default App;
