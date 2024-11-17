import './styles.css';

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Table } from "antd";

// function App() {
//   const [landownersData, setLandOwnersData] = useState([]);
//   const [loading, setLoading] = useState(true)
//   // Function to fetch land owners data
//   const columns = [
//     {
//       title: 'field_name',
//       dataIndex: 'field_name',
//       key: 'field_name',
//     },
//     {
//       title: 'acreage',
//       dataIndex: 'acreage',
//       key: 'acreage',
//     },
//     {
//       title: 'owner_name',
//       dataIndex: 'owner_name',
//       key: 'owner_name',
//     },
//   {
//     title: 'location',
//     dataIndex: 'location',
//     key: 'location',
//   },
// {
//   title: 'description',
//   dataIndex: 'description',
//   key: 'description',
// },
// {
//   title: 'crop_type',
//   dataIndex: 'crop_type',
//   key: 'crop_type',
// },
// {
//   title: 'soil_type',
//   dataIndex: 'soil_type',
//   key: 'soil_type',
// },
// {
//   title:"Actions",
//   dataIndex:"id",
//   key:"actions",
//   render:(id)=>{
//     return <><button>Edit</button>
//     <button onClick={()=>{ deleteLandOwnersData(id)}}>Delete</button>
// </>
// }
// }
//   ];
//   function handleFetchLandOwnersData() {
//     axios.get('http://127.0.0.1:8000/demo_field')
//     .then((response) => {
//       setLandOwnersData(
//         response.data
//       )
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     }).finally(()=>{
//       setLoading(false)
//     })
//   }
//   function deleteLandOwnersData(id) {
//     axios.delete(`http://127.0.0.1:8000/demo_field/${id}`)
//     .then((response) => {
//       setLandOwnersData(
//         landownersData.filter(item => item.id !== id)
//       )
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     }).finally(()=>{
//       setLoading(false)
//     })
//   }
//   useEffect(() => {
//     handleFetchLandOwnersData();
//   }, []);
//   return !loading &&<div className="App">
//     <Table dataSource={landownersData} columns={columns}/>;
//   </div>;
// }





// export default App;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Table, Modal, Form, Input, Button } from "antd";

// function App() {
//   const [landownersData, setLandOwnersData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingRecord, setEditingRecord] = useState(null);

//   const [form] = Form.useForm();

//   // Function to fetch landowners data
//   const columns = [
//     { title: "field_name", dataIndex: "field_name", key: "field_name" },
//     { title: "acreage", dataIndex: "acreage", key: "acreage" },
//     { title: "owner_name", dataIndex: "owner_name", key: "owner_name" },
//     { title: "location", dataIndex: "location", key: "location" },
//     { title: "description", dataIndex: "description", key: "description" },
//     { title: "crop_type", dataIndex: "crop_type", key: "crop_type" },
//     { title: "soil_type", dataIndex: "soil_type", key: "soil_type" },
//     {
//       title: "Actions",
//       dataIndex: "id",
//       key: "actions",
//       render: (id, record) => {
//         return (
//           <>
//             <button
//               onClick={() => {
//                 openEditModal(record);
//               }}
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => {
//                 deleteLandOwnersData(id);
//               }}
//             >
//               Delete
//             </button>
//           </>
//         );
//       },
//     },
//   ];

//   function handleFetchLandOwnersData() {
//     axios
//       .get("http://127.0.0.1:8000/demo_field")
//       .then((response) => {
//         setLandOwnersData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }

//   function deleteLandOwnersData(id) {
//     axios
//       .delete(`http://127.0.0.1:8000/demo_field/${id}`)
//       .then(() => {
//         setLandOwnersData(landownersData.filter((item) => item.id !== id));
//       })
//       .catch((error) => {
//         console.error("Error deleting data:", error);
//       });
//   }

//   function openEditModal(record) {
//     setEditingRecord(record);
//     form.setFieldsValue(record); // Set form values to the record's data
//     setIsModalOpen(true);
//   }

//   function handleSaveChanges() {
//     form
//       .validateFields()
//       .then((values) => {
//         const updatedRecord = { ...editingRecord, ...values };
//         axios
//           .put("http://127.0.0.1:8000/demo_field", updatedRecord)
//           .then(() => {
//             setLandOwnersData((prev) =>
//               prev.map((item) =>
//                 item.id === updatedRecord.id ? updatedRecord : item
//               )
//             );
//             setIsModalOpen(false); // Close modal after saving
//           })
//           .catch((error) => {
//             console.error("Error updating record:", error);
//           });
//       })
//       .catch((error) => {
//         console.error("Validation failed:", error);
//       });
//   }

//   useEffect(() => {
//     handleFetchLandOwnersData();
//   }, []);

//   return (
//     !loading && (
//       <div className="App">
//         <Table dataSource={landownersData} columns={columns} />
//         <Modal
//           title="Edit Landowner Data"
//           visible={isModalOpen}
//           onCancel={() => setIsModalOpen(false)}
//           onOk={handleSaveChanges}
//         >
//           <Form form={form} layout="vertical">
//             <Form.Item
//               name="field_name"
//               label="Field Name"
//               rules={[{ required: true, message: "Please input the field name!" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="acreage"
//               label="Acreage"
//               rules={[{ required: true, message: "Please input the acreage!" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="owner_name"
//               label="Owner Name"
//               rules={[{ required: true, message: "Please input the owner name!" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="location"
//               label="Location"
//               rules={[{ required: true, message: "Please input the location!" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="description"
//               label="Description"
//               rules={[{ required: true, message: "Please input the description!" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="crop_type"
//               label="Crop Type"
//               rules={[{ required: true, message: "Please input the crop type!" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="soil_type"
//               label="Soil Type"
//               rules={[{ required: true, message: "Please input the soil type!" }]}
//             >
//               <Input />
//             </Form.Item>
//           </Form>
//         </Modal>
//       </div>
//     )
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Table, Modal, Form, Input, Button } from "antd";

const { Header, Content } = Layout;

function App() {
  const [landownersData, setLandOwnersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [form] = Form.useForm();
  const [addForm] = Form.useForm();

  // Function to fetch landowners data
  const columns = [
    { title: "field_name", dataIndex: "field_name", key: "field_name",responsive: ["xs", "sm", "md", "lg"], },
    { title: "acreage", dataIndex: "acreage", key: "acreage" , responsive: ["sm", "md", "lg"],},
    { title: "owner_name", dataIndex: "owner_name", key: "owner_name", responsive: ["md", "lg"], },
    { title: "location", dataIndex: "location", key: "location", responsive: ["sm", "md", "lg"], },
    { title: "description", dataIndex: "description", key: "description", responsive: ["lg"], },
    { title: "crop_type", dataIndex: "crop_type", key: "crop_type" },
    { title: "soil_type", dataIndex: "soil_type", key: "soil_type" },
    {
      title: "Actions",
      dataIndex: "id",
      key: "actions",
      render: (id, record) => (
        <>
          <button type="primary" size="small" style={{ marginRight: 8 }}
            onClick={() => {
              openEditModal(record);
            }}
          >
            Edit
          </button>
          <button type="default" danger size="small"
            onClick={() => {
              deleteLandOwnersData(id);
            }}
          >
            Delete
          </button>
        </>
      ),
      responsive: ["xs", "sm", "md", "lg"], 
    },
  ];

  function handleFetchLandOwnersData() {
    axios
      .get("http://127.0.0.1:8000/demo_field")
      .then((response) => {
        setLandOwnersData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function deleteLandOwnersData(id) {
    axios
      .delete(`http://127.0.0.1:8000/demo_field/${id}`)
      .then(() => {
        setLandOwnersData(landownersData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }

  function openEditModal(record) {
    setEditingRecord(record);
    form.setFieldsValue(record); // Set form values to the record's data
    setIsModalOpen(true);
  }

  function handleSaveChanges() {
    form
      .validateFields()
      .then((values) => {
        const updatedRecord = { ...editingRecord, ...values };
        axios
          .put("http://127.0.0.1:8000/demo_field", updatedRecord)
          .then(() => {
            setLandOwnersData((prev) =>
              prev.map((item) =>
                item.id === updatedRecord.id ? updatedRecord : item
              )
            );
            setIsModalOpen(false); // Close modal after saving
          })
          .catch((error) => {
            console.error("Error updating record:", error);
          });
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  }

  function openAddModal() {
    addForm.resetFields(); // Clear form fields
    setIsAddModalOpen(true);
  }

  function handleAddNewRecord() {
    addForm
      .validateFields()
      .then((values) => {
        axios
          .post("http://127.0.0.1:8000/demo_field", values)
          .then((response) => {
            // Assuming the backend returns the newly created record in the response
            const newRecord = { ...values, id: response.data.id }; // Ensure `id` matches the backend's response
            setLandOwnersData((prev) => [...prev, newRecord]); // Add the new record to the state
            setIsAddModalOpen(false); // Close the modal after success
          })
          .catch((error) => {
            console.error("Error adding new record:", error);
          });
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  }
  

  useEffect(() => {
    handleFetchLandOwnersData();
  }, []);

  return (

    !loading && (
      <div className="App">
        <Layout>
        <Header className="header">
        <div className="header-content">
        <img
            src="/img_logo.jpeg" // Replace with your logo file path
            alt="Arva Logo"
            className="logo"
          />
        <h1>Arva Demo Field Management</h1>
        </div>
      </Header>
      <Content style={{ padding: "20px" }}>
        <Button
          type="primary"
          onClick={openAddModal}
          style={{ marginBottom: "20px" }}
        >
          Add New Record
        </Button>
        <Table dataSource={landownersData} columns={columns} />

        {/* Edit Record Modal */}
        <Modal
          title="Edit Landowner Data"
          visible={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onOk={handleSaveChanges}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="field_name"
              label="Field Name"
              rules={[{ required: true, message: "Please input the field name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="acreage"
              label="Acreage"
              rules={[{ required: true, message: "Please input the acreage!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="owner_name"
              label="Owner Name"
              rules={[{ required: true, message: "Please input the owner name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true, message: "Please input the location!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Please input the description!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="crop_type"
              label="Crop Type"
              rules={[{ required: true, message: "Please input the crop type!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="soil_type"
              label="Soil Type"
              rules={[{ required: true, message: "Please input the soil type!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>

        {/* Add New Record Modal */}
        <Modal
          title="Add New Landowner Record"
          visible={isAddModalOpen}
          onCancel={() => setIsAddModalOpen(false)}
          onOk={handleAddNewRecord}
        >
          <Form form={addForm} layout="vertical">
            <Form.Item
              name="field_name"
              label="Field Name"
              rules={[{ required: true, message: "Please input the field name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="acreage"
              label="Acreage"
              rules={[{ required: true, message: "Please input the acreage!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="owner_name"
              label="Owner Name"
              rules={[{ required: true, message: "Please input the owner name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true, message: "Please input the location!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Please input the description!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="crop_type"
              label="Crop Type"
              rules={[{ required: true, message: "Please input the crop type!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="soil_type"
              label="Soil Type"
              rules={[{ required: true, message: "Please input the soil type!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        </Content>
        </Layout>
      </div>
    )
  );
}

export default App;
