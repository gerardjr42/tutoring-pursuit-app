import { useEffect, useState } from "react";
import { useUsers } from "../context/UsersContext";

import { useNavigate } from "react-router-dom";

export default function AccountSettings() {
  const navigate = useNavigate()
  const { tutors } = useUsers()
  const [firstSkill, setFirstSkill] = useState("");
  const [secondSkill, setSecondSkill] = useState("");
  const [thirdSkill, setThirdSkill] = useState("");

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    calendly: "",
    image: "",
    cohort: "",
    intro: "",
    isTutor: "", //Ask if newUser is tutor or fellow, if tutor set this to true, if true then display skills
    skills: "",
  });

  function inputDataHandler(e) {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value,
    });
  }

  //!This could be more dynamic
  function inputSkillsHandler(e) {
    const{id, value} = e.target;
    if(id === "firstSkill") {
      setFirstSkill(value)
    } if(id === "secondSkill") {
      setSecondSkill(value)
    } else if( id === "thirdSkill") {
      setThirdSkill(value)
    }
  }

  useEffect(() => {
    setNewUser((newUser) => ({
      ...newUser,
      skills: [firstSkill, secondSkill, thirdSkill]
    }))
  }, [firstSkill, secondSkill, thirdSkill])

  //Uncomment below if you want to see the user data in console
  useEffect(() => {
    console.log(newUser);
  }, [newUser]);

  //Create avatar image
  function imageHandler(e) {
    const file = e.target.files[0];
    setNewUser({
      ...newUser,
      image: file,
    });
  }

  //Delete uploaded avatar image
  function deleteImage() {
    setNewUser({
      ...newUser,
      image: "",
    });
  }

  function resetForm() {
    setNewUser({
      ...newUser,
      firstName: "",
      lastName: "",
      calendly: "",
      image: "",
      cohort: "",
      intro: "",
      isTutor: "",
      skills: "",
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    tutors.push(newUser)
    navigate("/tutoring")
    resetForm()
  }
  console.log(tutors)

  return (
    <>
      <form
        className="mx-auto my-32 max-w-screen-md border border-gray-400 bg-white px-10 py-10"
        action="profile-form"
        id="profile-form"
        onSubmit={submitHandler}
      >
        <label
          htmlFor="firstName"
          className="color-[#494848] text-lg font-normal"
        >
          First Name
          <input
            className="mb-[4%] mt-[1%] h-[10%] w-[100%] rounded border border-gray-400 p-1 pl-2 text-[#494848]"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Type here..."
            value={newUser.firstName}
            onChange={inputDataHandler}
            required
          />
        </label>
        <label
          htmlFor="lastName"
          className="color-[#494848] text-lg font-normal"
        >
          Last Name
          <input
            className="mb-[4%] mt-[1%] h-[10%] w-[100%] rounded border border-gray-400 p-1 pl-2 text-[#494848]"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Type here..."
            value={newUser.lastName}
            onChange={inputDataHandler}
            required
          />
        </label>
        <label htmlFor="image" className="color-[#494848] text-lg font-normal">
          Upload Avatar Image
          <input
            className="mb-[4%] mt-[1%] h-[10%] w-[100%] rounded border border-gray-400 p-1 pl-2 text-[#494848]"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={imageHandler}
            required
          />
        </label>
        {newUser.image && (
          <div>
            <img
              // Creates temp image preview of image
              src={URL.createObjectURL(newUser.image)}
              alt="Profile"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            <br />
            <button
              type="button"
              onClick={deleteImage}
              className="rounded border-[1px] border-black bg-[#E9E9EC] px-1 py-0 hover:bg-[#D0D0D8]"
            >
              Delete Image
            </button>
          </div>
        )}

        <label
        htmlFor="aboutMe"
        className="color-[#494848] text-lg font-normal"
        >
          Bio
          <textarea 
          name="intro" 
          id="intro" 
          cols="25" 
          rows="2"
          placeholder="Tell us about yourself..."
          value={newUser.intro}
          onChange={inputDataHandler}
          required
          className="mb-[4%] mt-[1%] h-[10%] w-[100%] rounded border border-gray-400 p-1 pl-2 text-[#494848]"
          ></textarea>
        </label>

        <label
          className="color-[#494848] text-lg font-normal"
          id="tutor"
          htmlFor="tutor"
        >
          Are you a Pursuit Fellow or Tutor?
          <select
            className="mb-[4%] mt-[1%] h-[10%] w-[100%] rounded border border-gray-400 p-1 pl-2 text-[#494848]"
            name="isTutor"
            id="isTutor"
            value={newUser.isTutor}
            onChange={inputDataHandler}
            required
          >
            <option value="" disabled>
              Choose Below:
            </option>
            <option value="false">Fellow</option>
            <option value="true">Tutor</option>
          </select>
        </label>
        
        {newUser.isTutor === "false" && (
          <label
          className="color-[#494848] text-lg font-normal"
          id="cohorts"
          htmlFor="cohorts"
        >
          Cohort
          <select
            className="mb-[4%] mt-[1%] h-[10%] w-[100%] rounded border border-gray-400 p-1 pl-2 text-[#494848]"
            name="cohorts"
            id="cohorts"
            value={newUser.cohort}
            onChange={inputDataHandler}
            required
          >
            <option value="" disabled>
              Select your cohort
            </option>
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
        )}

        {newUser.isTutor === "true" && (
          <>
            <label
              htmlFor="calendly"
              className="color-[#494848] text-lg font-normal"
            >
              Calendly Link
              <input
                className="mb-[4%] mt-[1%] h-[10%] w-[100%] rounded border border-gray-400 p-1 pl-2 text-[#494848]"
                type="url"
                name="calendly"
                id="calendly"
                placeholder="Type here"
                value={newUser.calendly}
                onChange={inputDataHandler}
                required
              />
            </label>
            <label
              className="color-[#494848] text-lg font-normal"
              htmlFor="skills"
            >
              Name three topics you are willing to Tutor
              <input
                className="mb-[4%] mt-[1%] h-[10%] w-[100%] rounded border border-gray-400 p-1 pl-2 text-[#494848]"
                type="text"
                id="firstSkill"
                name="firstSkill"
                placeholder="First Choice..."
                value={firstSkill}
                onChange={inputSkillsHandler}
                required
                />
              </label>
              <label 
              htmlFor="skills" 
              className="color-[#494848] text-lg font-normal"
              >
              <input
                className="mb-[4%] mt-[1%] h-[10%] w-[100%] rounded border border-gray-400 p-1 pl-2 text-[#494848]"
                type="text"
                id="secondSkill"
                name="secondSkill"
                placeholder="Second Choice..."
                value={secondSkill}
                onChange={inputSkillsHandler}
                required
                />
              </label>
              <label 
              htmlFor="skills" 
              className="color-[#494848] text-lg font-normal"
              >
              <input
                className="mb-[4%] mt-[1%] h-[10%] w-[100%] rounded border border-gray-400 p-1 pl-2 text-[#494848]"
                type="text"
                id="thirdSkill"
                name="thirdSkill"
                placeholder="Third Choice..."
                value={thirdSkill}
                onChange={inputSkillsHandler}
                required
                />
              </label>
          </>
        )}
        <div className="mx-auto flex w-[50%] justify-evenly">
          <button
            className="h-10 w-28 rounded  border border-gray-400 bg-white text-xs text-black hover:bg-blue-600"
            onClick={resetForm}
          >
            Reset
          </button>
          <button className="h-10 w-28 rounded border border-gray-400 bg-[#56B7EE] text-xs hover:bg-blue-600">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
