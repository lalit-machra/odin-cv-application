import { useState } from 'react'
import '../styles/educationExp.css'

function CreateExp() {
  const [data, setData] = useState({
    schoolName: '',
    studyTitle: '',
    startStudyDate: '',
    endStudyDate: ''
  });
  const [dataHidden, setDataHidden] = useState(true);

  function changeVal(e) {
    let fieldName = e.target.name;
    let value = e.target.value
    setData({
      ...data,
    [fieldName] : value
    });
  }

  return (
    <>
      <form action="" hidden={!dataHidden} onSubmit={(e) => {
        e.preventDefault();
      }}> 
        <div className="inputDetails">
          <input name="schoolName" type="text" style={{width: '35ch'}} autoComplete="off"
              onChange={(e) => changeVal(e)} placeholder='Name of the school'></input>
          <input name="studyTitle" type="text" style={{width: '35ch'}} autoComplete="off"
              onChange={(e) => changeVal(e)} placeholder='Title of study'></input>
          <div className="studyDate">
            <input name="startStudyDate" type="number" style={{width: '10ch'}}
                autoComplete="off" onChange={(e) => changeVal(e)} placeholder='From'></input>
            <span> - </span>
            <input name="endStudyDate" type="number" style={{width: '10ch'}}
                autoComplete="off" onChange={(e) => changeVal(e)} placeholder='To'></input>
          </div>
          <button type="submit" onClick={() => setDataHidden(!dataHidden)}
              style={{backgroundColor: 'black', color: 'white'}}>
            Save
          </button>
        </div>
      </form>
      <div className='showDetails' style={dataHidden ? {display: 'none'} : {display: ''}}>
        <span className="showSchool">{data.schoolName}</span>
        <span className="showStudy">{data.studyTitle}</span>
        <div className="showDate">
          <span className="showStartDate">{data.startStudyDate}</span>
          <span> - </span>
          <span className="showEndDate">{data.endStudyDate}</span>
        </div>
        <button type="button" onClick={() => setDataHidden(!dataHidden)}>
          Edit
        </button>
      </div>
    </>
  );
}

export default function EducationExp() {
  const [count, setCount] = useState([1]);
  let exp = count.map((elem, index) => {
    return <CreateExp key={index} />
  });
  return (
    <section className="educationExp">
      <div className="infoHeader">
        <h2>Education Experience</h2>
        <button className="addExpBtn" onClick={() => setCount([...count, 1])}>Add</button>
      </div>
      <div className="experiences">
        {exp}
      </div>
    </section>
  );
}