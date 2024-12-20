import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ setId }) => {
  //useState hook is use to update the state
    const [user, setUser] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  //useEffect hook is use to rendre the api calls initialy
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  //this function is use to get the data from the api
  const fetchData = async () => {
    await axios
      .get("https://6646051751e227f23aad6ba3.mockapi.io/api/user")
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  };
  //this function is use to navigate to edit page
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  //this function is to delete the data from the api and update it
  const handleDelete = async (id) => {
    await axios
      .delete(`https://6646051751e227f23aad6ba3.mockapi.io/api/user/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((error) => console.log(error));
  };
    return (
        <div className="p-1 table-responsive">
      <table className="table table-hover table-danger table-bordered ">
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
            <th colspan={2}>Actions</th>
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
                <td>
                  <button
                    className="btn btn-success rounded-3"
                    onClick={() => {
                      handleEdit(element.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger rounded-3"
                    onClick={() => {
                      handleDelete(element.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-center">
        <button
          className="btn btn-success btn-lg fs-2 rounded-3 "
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </button>
      </div>
    </div>
    );
};

export default Users;