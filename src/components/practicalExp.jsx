import { useState } from 'react'
import '../styles/practicalExp.css'

function ExpGenerator() {
  const [expData, setExpData] = useState({
    companyName: '',
    title: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  });
  const [expDataHidden, setExpDataHidden] = useState(true);

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
            onChange={(e) => changeVal(e)} placeholder='Title'></input>
          <input name="companyName" type="text" style={{width: '30ch'}} autoComplete="off"
            onChange={(e) => changeVal(e)} placeholder='Name of the company'></input>
          <textarea name="responsibilities" placeholder='Responsibilities at work' onChange={(e) => changeVal(e)}></textarea>
          <div className="expDate">
            <input name="startDate" type="number" style={{width: '10ch'}}
              autoComplete="off" onChange={(e) => changeVal(e)} placeholder='From'></input>
            <span> - </span>
            <input name="endDate" type="number" style={{width: '10ch'}}
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
  const [counter, setCounter] = useState([1]);
  let exp = counter.map((elem, index) => {
    return <ExpGenerator key={index} />
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