import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Person from "../Person/Person";
import PersonCart from "../PersonCart/PersonCart";

const People = () => {
  const [allPerson, setAllPerson] = useState([]);
  useEffect(() => {
    fetch("./allPeopleData.JSON")
      .then((res) => res.json())
      .then((data) => setAllPerson(data));
  }, []);

  const [person, setPerson] = useState([]);
  const HandleMember = (persons) => {
    const newMember = [...person, persons];
    setPerson(newMember);
  };
  const addMemberIcon = <FontAwesomeIcon icon={faAddressBook} />;
  return (
    <div className="row pb-5">
      <div className="person-container col-md-9 ps-5 row row-cols-md-3">
        {allPerson.map((person) => (
          <Person key={person.id} person={person} handleMember={HandleMember}></Person>
        ))}
      </div>

      <div className="personCart-container col-md-3 text-center">
        <h2 className=" text-info fw-bolder ">Tour Member: {person.length}</h2>
        <h4 className=" text-info fw-bold">Total Cost: $ </h4>

        {person.map((man) => (
          <PersonCart key={man.name} man={man}></PersonCart>
        ))}
        <button className="mt-5 btn btn btn-warning fs-5">{addMemberIcon} See all members</button>
      </div>
    </div>
  );
};

export default People;
