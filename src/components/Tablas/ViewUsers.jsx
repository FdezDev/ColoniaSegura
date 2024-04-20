import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/');
        // La respuesta de Axios automáticamente maneja la conversión a JSON
        setUsers(response.data); // Ajusta según la estructura de tu respuesta
        console.log(response.data); // Verificar la estructura del JSON en la consola
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="px-3 shadow-sm overflow-x-auto">
        <input
          type="text"
          className="border-2 border-gray-400 p-2 rounded-lg"
          placeholder="Buscar usuarios"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Nombre</th>
              <th scope="col" className="px-6 py-3">Grupo</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Acción</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.group}</td>
                <td className="px-6 py-4">{user.status}</td>
                <td className="px-6 py-4">
                  <a href="#" className="text-blue-600 hover:underline">Ver usuario</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewUsers;
