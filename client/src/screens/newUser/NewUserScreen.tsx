import React, { useEffect, useId, useState } from "react";

// styled-components 
import { Container } from "./styles";
import FloatingLabels from "../../components/floatingLabels/FloatingLabels";
import { useServer } from "../../contexts/ServerContext";
import { ProfileProps } from "../../@types/ProfileProps";
import { useNotify } from "../../contexts/NotifyContext";

const NewUserScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState<File>();
  const [profiles, setProfiles] = useState<ProfileProps[]>();
  const {showNotify} = useNotify();
  var profileId = 1;

  const server = useServer();

  useEffect(() => {
    getProfiles();
  }, [])

  async function getProfiles(){
    const response = await server.getProfiles();
    
    if(response){
      setProfiles(response);
    }
  }

  async function handleNewUser(){
    if(!name || !email || !password){
      showNotify("Some fields are empty!", "negative");
    }
    let imageUrl = null;
    if(image){
      const formData = new FormData();
      formData.append("file", image);
      imageUrl = await server.uploadImage(formData);
    }

    const user = await server.createUser(name, email, password, profileId, imageUrl);
    if(user){
      showNotify("User Created!", "positive")
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>){
    if (e.target.files) {
      const file =  e.target.files[0];
      setImage(file);
    }
  }

  return (
    <Container>
      <div className="header">
        <h2>New User</h2>
        <button onClick={handleNewUser} type="button" className="btn btn-success">Save</button>
      </div>
      <FloatingLabels 
        value={{get: name, set: setName}}
        type="text"
        placeholder="Enter with name"
        label="Name"
      />

      <FloatingLabels 
        value={{get: email, set: setEmail}}
        type="email"
        placeholder="Enter with email"
        label="Email"
      />

      <FloatingLabels 
        value={{get: password, set: setPassword}}
        type="password"
        placeholder="Enter with password"
        label="Password"
      />

      <div className="mb-3">
        <input 
          onChange={handleFile} 
          className="form-control" 
          type="file" 
          id="formFileMultiple" 
        />
      </div>

      <label>Profile</label>
      <select onChange={(e) => {profileId = Number(e.target.value)}}  className="form-select" aria-label="Default select example">
        {profiles?.map((profile) => (
          <option key={profile.id} value={profile.id}>{profile.name}</option>
        ))}
      </select>
    </Container>
  );
}

export default NewUserScreen;