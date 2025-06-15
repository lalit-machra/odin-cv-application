import { useState } from 'react'
import '../styles/practicalExp.css'

function ExpGenerator(templateData) {
  let expData, setExpData, expDataHidden, setExpDataHidden;
  if (templateData.tempData === undefined) {
    [expData, setExpData] = useState({
      title: '',
      companyName: '',
      responsibilities: '',
      startDate: '',
      endDate: ''
    });
    [expDataHidden, setExpDataHidden] = useState(true);
  } else {
    [expData, setExpData] = useState({
      title: templateData.tempData.title,
      companyName: templateData.tempData.companyName,
      responsibilities: templateData.tempData.responsibilities,
      startDate: templateData.tempData.startDate,
      endDate: templateData.tempData.endDate
    });
    [expDataHidden, setExpDataHidden] = useState(false);
  }

  function changeVal(e) {
    let fieldName = e.target.name;
    let value = e.target.value;
    setExpData({
      ...expData,
      [fieldName] : value
    });
  }

  return (
    <>
      <form action="" hidden={!expDataHidden} onSubmit={(e) => {
        e.preventDefault();
      }}> 
        <div className="inputExpDetails">
          <input name="title" type="text" style={{width: '25ch'}} autoComplete="off"
            onChange={(e) => changeVal(e)} placeholder='Title' defaultValue={expData.title}></input>
          <input name="companyName" type="text" style={{width: '30ch'}} autoComplete="off"
            onChange={(e) => changeVal(e)} placeholder='Name of the company' defaultValue={expData.companyName}></input>
          <textarea name="responsibilities" placeholder='Responsibilities at work' defaultValue={expData.responsibilities}
            onChange={(e) => changeVal(e)}></textarea>
          <div className="expDate">
            <input name="startDate" type="number" style={{width: '10ch'}} defaultValue={expData.startDate}
              autoComplete="off" onChange={(e) => changeVal(e)} placeholder='From'></input>
            <span> - </span>
            <input name="endDate" type="number" style={{width: '10ch'}} defaultValue={expData.endDate}
              autoComplete="off" onChange={(e) => changeVal(e)} placeholder='To'></input>
          </div>
          <button type="submit" onClick={() => setExpDataHidden(!expDataHidden)}
            style={{backgroundColor: 'black', color: 'white'}}>
              Save
          </button>
        </div>
      </form>
      <div className='showExpDetails' style={expDataHidden ? {display: 'none'} : {display: ''}}>
        <span className="showTitle">{expData.title}</span>
        <span className="showCompany">{expData.companyName}</span>
        <span className="showResp">{expData.responsibilities}</span>
        <div className="showExpDate">
          <span className="showExpStartDate">{expData.startDate}</span>
          <span> - </span>
          <span className="showExpEndDate">{expData.endDate}</span>
        </div>
        <button type="button" onClick={() => setExpDataHidden(!expDataHidden)}>
          Edit
        </button>
      </div>
    </>
  );
}

export default function PracticalExp() {
  const [counter, setCounter] = useState([1, 1]);
  let exp = counter.map((elem, index) => {
    if (index === 0) {
      return <ExpGenerator key={index} tempData={{
        title: 'Software Engineer',
        companyName: 'BNY Melon',
        responsibilities: 'Designed, developed, and maintained scalable, high-performance applications using tech stack:' +
        'JavaScript, Python, NodeJS, React. Collaborated cross-functionally with product managers, designers, and QA engineers' +
        'to deliver features from concept to deployment.',
        startDate: '2021',
        endDate: '2022'
      }} />
    } else if (index === 1) {
      return <ExpGenerator key={index} tempData={{
        title: 'Data Engineer',
        companyName: 'JP Morgan & Chase',
        responsibilities: 'Optimized application performance, reduced load times, and improved overall user experience.' +
        'Automated CI/CD pipelines and contributed to infrastructure improvements using tools like' +
        '[e.g., Jenkins, GitHub Actions, Docker].',
        startDate: '2022',
        endDate: '2023'
      }} />
    } else {
      return <ExpGenerator key={index} />
    } 
  });
  return (
    <section className="practicalExp">
      <div className="infoHeader">
        <h2>Practical Experience</h2>
        <button className="addPracExpBtn" onClick={() => setCounter([...counter, 1])}>Add</button>
      </div>
      <div className="pracExps">
        {exp}
      </div>
    </section>
  );
}