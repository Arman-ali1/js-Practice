import React from 'react';

const EntriesPage = () => {

  const entries=[

    {
      username: "Arman",
      language: "Python",
      stdin: "Hello World",
      timestamp: "2021-08-11T14:00:00",
      code: "print('Hello World')"
    },
    {
      username: "Arman",
      language: "Python",
      stdin: "Hello World",
      timestamp: "2021-08-11T14:00:00",
      code: "print('Hello World')"
    },
    {
      username: "Arman",
      language: "Python",
      stdin: "Hello World",
      timestamp: "2021-08-11T14:00:00",
      code: "print('Hello World')"
    },
    {
      username: "Arman",
      language: "Python",
      stdin: "Hello World",
      timestamp: "2021-08-11T14:00:00",
      code: "print('Hello World')"
    },
    {
      username: "Arman",
      language: "Python",
      stdin: "Hello World",
      timestamp: "2021-08-11T14:00:00",
      code: "print('Hello World')"
    },
    {
      username: "Arman",
      language: "Python",
      stdin: "Hello World",
      timestamp: "2021-08-11T14:00:00",
      code: "print('Hello World')"
    },
    {
      username: "Arman",
      language: "Python",
      stdin: "Hello World",
      timestamp: "2021-08-11T14:00:00",
      code: "print('Hello World')"
    },
    {
      username: "Arman",
      language: "Python",
      stdin: "Hello World",
      timestamp: "2021-08-11T14:00:00",
      code: "print('Hello World')"
    },
    {
      username: "Arman",
      language: "Python",
      stdin: "Hello World",
      timestamp: "2021-08-11T14:00:00",
      code: "print('Hello World')"
    }
  ]
  return (
    <div>
      <h1>Submitted Entries</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Code Language</th>
            <th>Standard Input</th>
            <th>Timestamp</th>
            <th>Snippet Preview</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.username}</td>
              <td>{entry.language}</td>
              <td>{entry.stdin}</td>
              <td>{entry.timestamp}</td>
              <td>{entry.code.substring(0, 100)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntriesPage;
