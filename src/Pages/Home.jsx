import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  //useState hook is use for state management
  const [user, setUser] = useState([]);
  //useEffect hook is use to render the api calls initialy
  useEffect(() => {
    fetchData();
  }, []);
  //this function is use to get data from the api
  const fetchData = async () => {
    await axios
      .get("https://6646051751e227f23aad6ba3.mockapi.io/api/user")
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-1 table-responsive">
      <table className="table table-hover table-info table-bordered ">
        <thead className="fs-3 text-center">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Lat</th>
            <th>Lng</th>
            <th>Phone</th>
            <th>Website</th>
            <th>CompanyName</th>
            <th>CatchPhrase</th>
            <th>Bs</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {user.map((element, index) => {
            return (
              <tr key={index}>
                <th>{element.id}</th>
                <td>{element.name}</td>
                <td>{element.username}</td>
                <td>{element.email}</td>
                <td>{element.address.street}</td>
                <td>{element.address.suite}</td>
                <td>{element.address.city}</td>
                <td>{element.address.zipcode}</td>
                <td>{element.address.geo.lat}</td>
                <td>{element.address.geo.lng}</td>
                <td>{element.phone}</td>
                <td>{element.website}</td>
                <td>{element.company.companyname}</td>
                <td>{element.company.catchPhrase}</td>
                <td>{element.company.bs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
