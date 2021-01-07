import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import "./UserDetails.css";


const UserDetails = ({ match, data, loading }) => {
    const [person, setPerson] = useState({});
    useEffect(() => {
      setPerson(data.find((el) => el.name === match.params.name));
    }, [match.params.name, data]);
    console.log("data1 :", data[0]);
    console.log("match :", match);
  
    return loading ? (
      <div>load</div>
    ) : (
      <div>
        {/* {console.log("person", person.address.street)};  */}
        <div className="profil">
          <img
            className="profilpicture"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdagfNlkCXKS54rDkgY6CjGNtPECsI_SZlKQ&usqp=CAU"
            alt=""
          /> 
          <div className="details">
            <p className="Label">
              Name :<span className="persondetails">{person.name}</span>
            </p>
            <p className="Label">
              User Name:
              <span className="persondetails"> {person.username} </span>{" "}
            </p>
            <p className="Label">
              Email :<span className="persondetails"> {person.email} </span>{" "}
            </p>
            <div className="groupe">
            <p className="Label"> Address :</p>
            <div className="Addressdetails">
                <p className="Label"> street:
            <span className="persondetails"> {person && person.address && person.address.street} </span>
            </p>
            <p className="Label"> suite:
            <span className="persondetails"> {person && person.address && person.address.suite} </span>
            </p>
            <p className="Label"> city:
            <span className="persondetails"> {person && person.address && person.address.city} </span>
            </p>
            <p className="Label"> zipcode:
            <span className="persondetails"> {person && person.address && person.address.zipcode} </span>
            </p>
            </div>
            </div>
            <p className="Label"> Company:
                <span className="persondetails"> {person && person.company && person.company.name} </span>
            </p>
            <p className="Label">
              Phone number:
              <span className="persondetails"> {person.phone} </span>
            </p>
            <p className="Label">
              website:
              <a
                href={"https://www." + person.website}
                target="_blank"
                rel="noreferrer"
              >
                {person.website}
              </a>
            </p>
            {/* <span>{person.company} </span> */}
          </div>
        </div>
        <Link to="/">
          <h4>Back to main page</h4>
        </Link>
      </div>
    );
  };
  
  export default UserDetails;