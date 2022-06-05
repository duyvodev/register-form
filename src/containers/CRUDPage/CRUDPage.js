import "./styles.css";
import { Table, Tag, Space, Input, Button } from "antd";
import "antd/dist/antd.css";
import {
  fetchData,
  createData,
  deleteData,
  editData,
} from "../../utils/getData";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CRUDpage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const [data, setData] = useState([]);

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // GetData Function
  const getData = () => {
    fetchData().then((data) =>
      setData(
        data.map((item) => {
          let date = new Date(item.createdAt);
          var createdDate =
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds() +
            " " +
            date.getDate() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getFullYear() +
            " ";
          return { ...item, createdAt: createdDate };
        })
      )
    );
  };

  // HANDLE SUBMIT
  const handleCreateData = () => {
    const date = new Date();
    const createdAt = date.toISOString();
    const id = (data.length + 1).toString();
    const dataSubmit = {
      id,
      type,
      name,
      age: parseInt(age),
      createdAt,
    };
    createData(dataSubmit);

    getData();

    setType("");
    setName("");
    setAge("");
  };

  // HANDLE EDIT DATA
  (() => {
    const editBtns = document.querySelectorAll("a.editBtn");
    const nameData = document.querySelectorAll("span.nameData");
    const ageData = document.querySelectorAll("span.ageData");
    const tagData = document.querySelectorAll("span.tagData");

    editBtns.forEach((btn, index) => {
      btn.onclick = () => {
        nameData[index].setAttribute("contenteditable", true);
        ageData[index].setAttribute("contenteditable", true);
        tagData[index].setAttribute("contenteditable", true);

        nameData[index].focus();
      };
    });
  })();

  // HANDLE SAVE DATA / PUT
  (() => {
    const saveBtns = document.querySelectorAll("a.saveBtn");
    const nameData = document.querySelectorAll("span.nameData");
    const ageData = document.querySelectorAll("span.ageData");
    const tagData = document.querySelectorAll("span.tagData");

    const paginationBtns = document.querySelectorAll("li.ant-pagination-item");

    saveBtns.forEach((btn, index) => {
      btn.onclick = () => {
        let name = nameData[index].innerText;
        let age = ageData[index].innerText;
        let type = tagData[index].innerText;
        const date = new Date();
        const createdAt = date.toISOString();
        let id;
        const editedData = {
          name,
          age,
          type,
          createdAt,
        };

        paginationBtns.forEach((item) => {
          if (item.classList.contains("ant-pagination-item-active")) {
            id = (parseInt(item.title) - 1) * 10 + index;
          }
        });

        editData(data[id].id, editedData);
        getData();

        nameData[index].setAttribute("contenteditable", false);
        ageData[index].setAttribute("contenteditable", false);
        tagData[index].setAttribute("contenteditable", false);
      };
    });
  })();

  // HANDLE DELETE DATA
  (() => {
    const deleteBtns = document.querySelectorAll("a.deleteBtn");
    const paginationBtns = document.querySelectorAll("li.ant-pagination-item");
    let id = 0;
    deleteBtns.forEach((btn, index) => {
      btn.onclick = () => {
        paginationBtns.forEach((item) => {
          if (item.classList.contains("ant-pagination-item-active")) {
            id = (parseInt(item.title) - 1) * 10 + index;
          }
        });
        deleteData(data[id].id);
        getData();
      };
    });
  })();

  useEffect(() => {
    getData();
  }, [data]);

  useEffect(() => {
    if (userToken) {
      navigate("/crudpage");
    }
  }, [location.pathname]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="nameData">{text}</span>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      render: (text) => <span className="ageData">{text}</span>,
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => <span className="timeData">{text}</span>,
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      render: (_, { type }) => {
        let color = "magenta";
        let typeLength = type.length;

        switch (typeLength) {
          case 2:
            color = "red";
            break;
          case 3:
            color = "volcano";
            break;
          case 4:
            color = "orange";
            break;
          case 5:
            color = "gold";
            break;
          case 6:
            color = "lime";
            break;
          case 7:
            color = "cyan";
            break;
        }

        return (
          <>
            <Tag className="tagData" color={color} key={type}>
              {type.toUpperCase()}
            </Tag>
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a className="editBtn">Edit</a>
          <a className="saveBtn">Save</a>
          <a className="deleteBtn">Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="tableWrapper">
      <div className="userForm">
        <h3 className="formHeader">Create data</h3>
        <div className="inputWrapper">
          <p className="inputLabel">Type</p>
          <Input
            value={type}
            onInput={(e) => {
              setType(e.target.value);
            }}
            id="typeInput"
            className="userInput"
            placeholder="Enter type..."
          />
        </div>
        <div className="inputWrapper">
          <p className="inputLabel">Name</p>
          <Input
            value={name}
            onInput={(e) => {
              setName(e.target.value);
            }}
            id="nameInput"
            className="userInput"
            placeholder="Enter name..."
          />
        </div>
        <div className="inputWrapper">
          <p className="inputLabel">Age</p>
          <Input
            value={age}
            onInput={(e) => {
              setAge(e.target.value);
            }}
            id="ageInput"
            className="userInput"
            placeholder="Enter age..."
          />
        </div>
        <Button onClick={handleCreateData} id="submitBtn">
          Submit data
        </Button>
      </div>
      <Table className="marginTop" dataSource={data} columns={columns} />;
    </div>
  );
};

export default CRUDpage;
