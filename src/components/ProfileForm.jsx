import { useState } from "react"

export default function ProfileForm(){
    const[inputData,setInputData]=useState({
        profileformcontainer__name:``,
        calendlyusername:``,
        calendlylink:``


    })
    const[selectOption,setSelectOption]=useState(``)

    function inputDataHandler(event){
        console.log(event.target.value)
        setInputData({...inputData,[event.target.id]:event.target.value})


    }
    function selectOptionHandler(event){
        setSelectOption(event.target.value)
        console.log(selectOption)
    }
    function submitHandler(event){
        event.preventDefault()
        console.log(inputData,selectOption)
        setInputData({...inputData,
            profileformcontainer__name:``,
            calendlyusername:``,
            calendlylink:``
    
    
        })

    }
    return (
        <>
        <form action="profile-form" id="profile-form" className="profile-form" onSubmit={submitHandler}>
        <div className="profile-form-container">
            <label htmlFor="">Name
           
                <input value={inputData.name}placeholder='Type here' id='profileformcontainer__name' type="text" className="profile-container__name" onChange={inputDataHandler}/>
            </label>
            <br />
            <label id="profile-form-container__cohort" className="profile-form-container__cohort" htmlFor="">
                Cohort
                <br />
            <select name="" onChange={selectOptionHandler}>
               
               <option value="">Select</option>
               <option value="10.6">10.6</option>
               <option value="10.5">10.5</option>
               <option value="10.4">10.4</option>
               <option value="10.3">10.3</option>
               <option value="10.2">10.2</option>
               <option value="10.1">10.1</option>
               <option value="9.6">9.6</option>
               <option value="9.5">9.5</option>
               <option value="9.4">9.4</option>
               <option value="9.3">9.3</option>
               <option value="9.2">9.2</option>
               <option value="9.1">9.1</option>
               <option value="8.4">8.4</option>
               <option value="8.3">8.3</option>
               <option value="8.2">8.2</option>
               <option value="8.1">8.1</option>
               <option value="7.2">7.2</option>
               <option value="7.1">7.1</option>
           </select>
            </label>
            
            <br />
            <label htmlFor="">
                Calendly Username
                <input value={inputData.calendlyusername} placeholder="Type here" id='calendlyusername' type="text" className="profile-form-container__calendlyusername"onChange={inputDataHandler}/>
            </label>
            <br />
            <label htmlFor="">
                Calendly Link
                <input value={inputData.calendlylink} placeholder="Type here" id='calendlylink' type="text" className="profile-container__calendlylink" onChange={inputDataHandler}/>
            </label>
            <br />
            <button className="profile-form-container__cancelbutton"> Cancel</button>
            <button className="profile-form-container__submitbutton"> Submit</button>

        </div>
 
        </form>
               </>
    )
}