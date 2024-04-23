import { useState } from 'react';

export default function Connections() {
  // Mock data for connections/friends
  const connections = [
    { id: 1, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 2, name: 'Alice Smith', email: 'alice@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Connections</h1>
        <ul>
          {connections.map((connection) => (
            <li
              key={connection.id}
              className="border-b py-2 flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{connection.name}</h2>
                <p className="text-gray-600">{connection.email}</p>
              </div>
              {/* Add more actions or details here */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
