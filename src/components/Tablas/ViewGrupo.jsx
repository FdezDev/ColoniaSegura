import React from "react";
import AddGrupo from "../Form/AddGrupo";
import { useState } from "react";
import AddUser from "../Form/AddUser";

function ViewGrupo() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const [isVisible1, setIsVisible1] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1((prevState) => !prevState);
  };

  return (
    <>
      <div className="px-3 shadow-sm overflow-x-auto">
        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
          <div className="relative flex flex-row items-center justify-between w-full">
            <input
              type="text"
              className="flex border-2 border-gray-400 lg:w-80 p-2 outline-none rounded-lg ps-4"
              placeholder="Buscar grupo"
            />

            <div>
              <button
                onClick={toggleVisibility}
                className="block bg-blue-500 p-2 rounded-3xl px-4 text-white font-bold"
              >
                Crear Grupo
              </button>
            </div>
          </div>
        </div>
        <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                Check
              </th>
              <th scope="col" className="p-4">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre del grupo
              </th>
              <th scope="col" className="px-6 py-3">
                Cantidad
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="bg-white border-b  hover:bg-gray-50 ">
            <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
              <td className="w-4 p-4">1</td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <div className="ps-3">
                  <div className="text-base font-semibold">Tuxtla calle 1</div>
                </div>
              </th>
              <td className="px-6 py-4">19</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Online
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  onClick={toggleVisibility1}
                  type="button"
                  data-modal-target="editUserModal"
                  data-modal-show="editUserModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                >
                  agregar usuario
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AddGrupo
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
        onClick={toggleVisibility}
      />

      <AddUser isVisible1={isVisible1} toggleVisibility1={toggleVisibility1} onClick={toggleVisibility1} />
    </>
  );
}

export default ViewGrupo;
