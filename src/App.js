import './App.css';
import Button from './Button.js'
import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import TeamPage from './TeamPage';
const CopilotComponent = React.lazy(() => import("Copilot/CopilotComponent"));
const TeamMembersContextProvider = React.lazy(() => import("Copilot/CopilotComponent"));

function App() {
  const teamMembers = [
    { name: 'John Doe', role: 'Developer', createdDate: '2022-01-01' },
    { name: 'Jane Smith', role: 'Designer', createdDate: '2022-02-15' },
    // Add more team members as needed
  ];

  return (
    <TeamMembersContextProvider>
    <div className="App">
      <header className="App-header">
        <Button></Button>
        <ErrorBoundary>
        <Suspense fallback={<></>}> 
        <CopilotComponent name="anurag"></CopilotComponent>
        </Suspense> </ErrorBoundary>
        <TeamPage teamMembers={teamMembers}></TeamPage>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </TeamMembersContextProvider>
  );
}

export default App;
