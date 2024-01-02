import React, { useState } from 'react'
import './EditProfile.css'

const EditProfile = ({ user }) => {
  const [name , setName] = useState(user.name);
  const [semester , setSemester] = useState(user.semester);
  const [department , setDepartment] = useState(user.department);
  const [year , setYear] = useState(user.year);
  const [institute , setInstitute] = useState(user.institute);
  const [scholarId , setScholarId] = useState(user.scholarId);

  return (
    <div className='edit-profile'>
      <div>
      <label>Name</label>
      <div>
          <input type='text' value={name} placeholder='Enter Your Name' onChange={(e)=>(setName(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Department</label>
      <div>
          <input type='text' value={department} placeholder='Enter Your Department' onChange={(e)=>(setDepartment(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Semester</label>
      <div>
          <input type='text' value={semester} placeholder='Enter Your Current Semester' onChange={(e)=>(setSemester(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Year of Passing</label>
      <div>
          <input type='text' value={year} placeholder='Enter Your Passing Year' onChange={(e)=>(setYear(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Institute</label>
      <div>
          <input type='text' value={institute} placeholder='Enter Your Institute' onChange={(e)=>(setInstitute(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Scholar Id (Only for NITS)</label>
      <div>
          <input type='text' value={scholarId} placeholder='Enter Your Scholar ID' onChange={(e)=>(setScholarId(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
    </div>
  )
}

export default EditProfile