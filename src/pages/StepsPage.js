import React from 'react'
import LogList from '../logs/LogList'

export default function StepsPage({ logList }) {
  //const [stepLogList, setStepLogList] = useState([])
  const stepLogs = logList.filter(log => log.type === "steps")

  // useEffect(() => {
  //   const fetchStepLogsFromBackend = async () => {
  //     const response = await fetch(API + "/logs?type=steps")
  //     const stepLogs = await response.json();
  //     setStepLogList(stepLogs);
  //   }
  //   fetchStepLogsFromBackend();
  // }, [])

  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Steps</h2>
        </div>
        <div className="col text-end">
          <button className="btn btn-success">New Step Log</button>
        </div>
      </div>
      <div className="row">
        <LogList logList={stepLogs}/>
      </div>
    </>
  )
}
