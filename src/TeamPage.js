import React, { useState } from 'react';
import './TeamPage.css'; // Import CSS file for styling (create this file and define styles)
import { useTeamMembersList } from "Copilot/store";

const TeamPage = () => {
  const [members, setMembers] = useTeamMembersList();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(members.length, "... from")
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="team-page">
      <h1>Team Page</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={() => setMembers([])}>{"Clear it"}</button>
      </div>
      <table className="team-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.role}</td>
              <td>{member.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamPage;
