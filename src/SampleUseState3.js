import React, { useState } from 'react';

const SampleUseState3 = () => {
  const [data, setdata] = useState({ username: '', age: '' });
  const [items, setitems] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [editindex, seteditindex] = useState(null);

  function handleAppOrUpdate(index) {
    if (data.username === '' || isNaN(data.age)) return;

    if (isEditing) {
      const modifieditems = [...items];
      modifieditems[index] = data;
      setitems(modifieditems);
      setEditing(false);
      seteditindex(null);
    } else {
      setitems([...items, data]);
    }
    setdata({ username: '', age: '' });
  }

  function handleEditing(index) {
    setEditing(true);
    seteditindex(index);
    setdata(items[index]);
  }

  function handleDelete(index) {
    const newArray = items.filter((_, i) => i !== index);
    setitems(newArray);
  }

  // Styles
  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#fefefe',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    padding: '10px',
    marginRight: '10px',
    marginBottom: '10px',
    width: 'calc(50% - 12px)',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px 15px',
    marginRight: '10px',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336'
  };

  const listItemStyle = {
    padding: '10px 0',
    borderBottom: '1px solid #ccc'
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '40px',
    padding: '10px',
    fontSize: '14px',
    color: '#666'
  };

  return (
    <>
      <div style={containerStyle}>
        <h2 style={headingStyle}>User Data Manager</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <input
            type="text"
            value={data.username}
            onChange={(e) => setdata({ ...data, username: e.target.value })}
            placeholder="Enter your name"
            style={inputStyle}
          />
          <input
            type="text"
            value={data.age}
            onChange={(e) => setdata({ ...data, age: e.target.value })}
            placeholder="Enter your age"
            style={inputStyle}
          />
          <button onClick={() => handleAppOrUpdate(editindex)} style={buttonStyle}>
            {isEditing ? 'Update' : 'Add'}
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((eachObj, index) => (
            <li key={index} style={listItemStyle}>
              <strong>{eachObj.username}</strong> ({eachObj.age})
              <button onClick={() => handleEditing(index)} style={buttonStyle}>Edit</button>
              <button onClick={() => handleDelete(index)} style={deleteButtonStyle}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer style={footerStyle}>
        &copy; {new Date().getFullYear()}  Sura Akhila. All rights reserved.
      </footer>

      {/* Media Query Styles */}
      <style>
        {`
          @media (max-width: 600px) {
            input {
              width: 100% !important;
              margin-bottom: 10px;
            }

            button {
              margin-top: 10px;
              width: 100%;
            }

            div {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default SampleUseState3;
