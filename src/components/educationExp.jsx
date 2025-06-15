import { useState } from 'react'
import '../styles/educationExp.css'

function CreateExp(templateData={}) {
  let data, setData, dataHidden, setDataHidden;
  if (templateData.tempData === undefined) {
    [data, setData] = useState({
      schoolName: '',
      studyTitle: '',
      startStudyDate: '',
      endStudyDate: ''
    });
    [dataHidden, setDataHidden] = useState(true);
  } else {
    [data, setData] = useState({
      schoolName: templateData.tempData.schoolName,
      studyTitle: templateData.tempData.studyTitle,
      startStudyDate: templateData.tempData.startStudyDate,
      endStudyDate: templateData.tempData.endStudyDate
    });
    [dataHidden, setDataHidden] = useState(false);
  }
  
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
              onChange={(e) => changeVal(e)} placeholder='Name of the school' defaultValue={data.schoolName}></input>
          <input name="studyTitle" type="text" style={{width: '35ch'}} autoComplete="off"
              onChange={(e) => changeVal(e)} placeholder='Title of study' defaultValue={data.studyTitle}></input>
          <div className="studyDate">
            <input name="startStudyDate" type="number" style={{width: '10ch'}} defaultValue={data.startStudyDate}
                autoComplete="off" onChange={(e) => changeVal(e)} placeholder='From'></input>
            <span> - </span>
            <input name="endStudyDate" type="number" style={{width: '10ch'}} defaultValue={data.endStudyDate}
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
  const [count, setCount] = useState([1, 1]);
  let exp = count.map((elem, index) => {
    if (index === 0) {
      return <CreateExp key={index} tempData={{
        schoolName: 'Mother Teresa Convent School',
        studyTitle: 'Senior Secondary (12th)',
        startStudyDate: 2020,
        endStudyDate: 2021
      }}/>
    } else if (index === 1) {
      return <CreateExp key={index} tempData={{
        schoolName: 'National Montessori Convent School',
        studyTitle: 'Matriculation (10th)',
        startStudyDate: 2018,
        endStudyDate: 2019
      }}/>
    } else {
      return <CreateExp key={index} />
    }
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