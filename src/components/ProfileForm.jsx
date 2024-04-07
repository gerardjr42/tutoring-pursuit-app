export default function ProfileForm(){
    return (
        <>
        <div className="profile-form-container">
            <label htmlFor="">Name
           
                <input placeholder='Type here' id='profile-form-container__name' type="text" className="profile-container__name"/>
            </label>
            <br />
            <label id="profile-form-container__cohort" className="profile-form-container__cohort" htmlFor="">
                Cohort
                <br />
            <select name="" >
               
               <option value="10.6">Select</option>
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
                <input placeholder="Type here" id='profile-form-container__calendlyusername' type="text" className="profile-form-container__calendlyusername"/>
            </label>
            <br />
            <label htmlFor="">
                Calendly Link
                <input placeholder="Type here" id='profile-form-container__calendlylink' type="text" className="profile-container__calendlylink"/>
            </label>
            <br />
            <button className="profile-form-container__cancelbutton"> Cancel</button>
            <button className="profile-form-container__submitbutton"> Submit</button>

        </div>
        </>
    )
}