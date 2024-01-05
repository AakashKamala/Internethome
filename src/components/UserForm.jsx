import React, { useState } from 'react';
import "../styles/UserForm.css"

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    mobileNumber: '',
    email: '',
    socialMedia: [],
    projects: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSocialMediaInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSocialMedia = [...formData.socialMedia];
    updatedSocialMedia[index][name] = value;

    setFormData((prevData) => ({
      ...prevData,
      socialMedia: updatedSocialMedia,
    }));
  };

  const handleProjectInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...formData.projects];
    updatedProjects[index][name] = value;

    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const addSocialMedia = () => {
    if (formData.socialMedia.length < 3) {
      setFormData((prevData) => ({
        ...prevData,
        socialMedia: [...prevData.socialMedia, { name: '', link: '' }],
      }));
    }
  };

  const addProject = () => {
    if (formData.projects.length < 3) {
      setFormData((prevData) => ({
        ...prevData,
        projects: [...prevData.projects, { name: '', description: '', link: '' }],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Short Description/Bio:
        <textarea name="bio" value={formData.bio} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Mobile Number:
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email ID:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <div>
        <h3>Social Media Links:</h3>
        {formData.socialMedia.map((social, index) => (
          <div key={index}>
            <label>
              Social Media Name:
              <input
                type="text"
                name="name"
                value={social.name}
                onChange={(e) => handleSocialMediaInputChange(index, e)}
              />
            </label>
            <label>
              Link:
              <input
                type="text"
                name="link"
                value={social.link}
                onChange={(e) => handleSocialMediaInputChange(index, e)}
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addSocialMedia}>
          Add Social Media
        </button>
      </div>
      <br />
      <div>
        <h3>Projects:</h3>
        {formData.projects.map((project, index) => (
          <div key={index}>
            <label>
              Project Name:
              <input
                type="text"
                name="name"
                value={project.name}
                onChange={(e) => handleProjectInputChange(index, e)}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={project.description}
                onChange={(e) => handleProjectInputChange(index, e)}
              />
            </label>
            <label>
              Link:
              <input
                type="text"
                name="link"
                value={project.link}
                onChange={(e) => handleProjectInputChange(index, e)}
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addProject}>
          Add Project
        </button>
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
