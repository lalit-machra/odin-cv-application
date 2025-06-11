import { useState } from 'react'
import '../styles/generalInfo.css'

export default function GeneralInfo() {
  const [dataHidden, setDataHidden] = useState(false);

  const [name, setName] = useState("John");
  const [email, setEmail] = useState("johnhello@gmail.com");
  const [phone, setPhone] = useState('+1 453 245 998');

  return (
    <section className="generalInfo">
      <div className="infoHeader">
        <h2>General Information</h2>
        <button type="button" onClick={() => {
          setDataHidden(!dataHidden);
          setName(document.querySelector(".nameInput").value);
          setEmail(document.querySelector(".emailInput").value);
          setPhone(document.querySelector(".phoneInput").value)}}>
          {dataHidden ? 'Save' : 'Edit'}
        </button>
      </div>
      <form>
        <label>
          <span className="nameTitle">Name:</span>
          <span className="showName" hidden={dataHidden}>{name}</span>
          <input className="nameInput" autoComplete="off" hidden={!dataHidden} defaultValue={name}></input>      
        </label>
        <label>
          <span className="emailTitle">Email:</span>
          <span className="showEmail" hidden={dataHidden}>{email}</span>
          <input className="emailInput" type="email" autoComplete="off" hidden={!dataHidden} defaultValue={email}></input>
        </label>
        <label>
          <span className="phoneTitle">Phone Number:</span>
          <span className="showPhoneNum" hidden={dataHidden}>{phone}</span>
          <input className="phoneInput" type="tel" autoComplete="off" hidden={!dataHidden} defaultValue={phone}></input>
        </label>
      </form>
    </section>
  );
}