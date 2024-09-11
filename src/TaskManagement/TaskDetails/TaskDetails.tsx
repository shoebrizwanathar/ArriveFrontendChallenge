import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './TaskDetails.css'
import { useParams } from "react-router-dom";
import axios from 'axios';

function TaskDetails() {

  const navigate = useNavigate();
  function showListing() {
    navigate('/');
  }

  let spotId = useParams();

  const [taskDetails, setTaskDetails] = useState<any[]>([])

  useEffect(() => {
    let taskId = spotId.id;
    axios.get('https://my-json-server.typicode.com/ArriveDev/frontend-interview/tasks/'+ taskId)
      .then(function (response) {
        
        setTaskDetails([response.data]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <div className="header">
        <button onClick={showListing}><svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 219.151 219.151" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575 C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575 c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"></path> <path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008 c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825 c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628 c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"></path> </g> </g></svg></button>
        <p className="text-2xl font-bold margin-10">
          Task Details
        </p>
      </div>
      <div>
        {taskDetails.map((data) => (
          <div>
            <div className="detail-section">
              <p className='detail-label'>Name</p>
              <p>{data.name}</p>
            </div>
            <div className="detail-section">
              <p className='detail-label'>Author's Name</p>
              <p>{data.author.first_name + " " + data.author.last_name}</p>
            </div>
            <div className="detail-section">
              <p className='detail-label'>User Name</p>
              <p>{data.author.username}</p>
            </div>
            <div className="detail-section">
              <p className='detail-label'>Description</p>
              <p>{data.description}</p>
            </div>
            <div className="detail-section">
              <p>Step Details :</p>
              {data.steps.map((stepData: any, index: any) => {
                if (stepData.completed === true) {
                  return <p key={index} className='step-status'>
                    <svg viewBox="0 0 1024 1024" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg" fill="#0de761" stroke="#0de761"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#2fc669" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path></g></svg>
                    <span className='margin-10'>{stepData.step}</span>
                  </p>
                } else {
                  return <p key={index} className='step-status'>
                    <svg fill="#ff0000" viewBox="0 0 200 200" height="25px" width="25px" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"></path><path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"></path></g></svg>
                    <span className='margin-10'>{stepData.step}</span>
                  </p>
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TaskDetails
