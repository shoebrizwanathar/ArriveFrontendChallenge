
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import './TaskList.css'
import axios from 'axios';

function TaskList() {
  const [tableData, setTableData] = useState<any[]>([])

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/ArriveDev/frontend-interview/tasks')
      .then(function (response) {
        // handle success
        setTableData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const navigate = useNavigate();
	function showDetails(id:number) {
		navigate('/details/'+id);
	}

  return (
    <>
      <div>
        <p className="text-2xl font-bold">
          Task Management
        </p>
        <div className="table-container relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Author's Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Steps Completed
                </th>
                <th scope="col" className="px-6 py-3">
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700" key={data.id}>
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                    {data.name}
                  </th>
                  <td className="px-6 py-4">
                    {data.description}
                  </td>
                  <td className="px-6 py-4">
                    {data.author.first_name + " " + data.author.last_name}
                  </td>
                  <td className="px-6 py-4">
                    <progress id="file" value={(data.steps.filter((res: any) => res.completed)).length} max={data.steps.length}></progress>
                    <label>{' (' + (data.steps.filter((res: any) => res.completed)).length + '/' + data.steps.length + ')'}</label>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => showDetails(data.id)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TaskList
