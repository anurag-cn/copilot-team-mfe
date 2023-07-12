import React, { useState } from 'react';
import './TeamPage.css'; // Import CSS file for styling (create this file and define styles)

const TeamPage = ({ teamMembers }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMembers = teamMembers.filter((member) =>
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
