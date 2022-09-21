import { Route, Routes } from "react-router-dom";
import AllLogsPage from './pages/AllLogsPage'
import CaloriePage from './pages/CaloriePage'
import WaterPage from './pages/WaterPage'
import StepsPage from './pages/StepsPage'
import LogFormPage from './pages/LogFormPage'
import Header from "./Header";
import { useEffect, useState } from "react";
import { TEST_LOGS } from "./FAKE_DATA";
import LoginForm from "./pages/LoginForm";
import { fetchAllLogs } from "./LogService";

const API = "http://ourownpage.com/api"

function App() {
  const [logList, setLogList] = useState([])

  const addLog = async (newLogData) => {

    // tell our backend
    const response = await fetch(API + "/logs", {
      method: "POST",
      headers: {}, // TODO: add headers
      body: JSON.stringify(newLogData)
    })
    const newLog = await response.json();

    //const newLog = { ...newLogData, id: logList[logList.length - 1].id + 1 } // id hack
    setLogList(logList.concat(newLog))
  }

  useEffect(() => {
    const fetchLogsFromBackend = async () => {
      const allLogs = await fetchAllLogs();
      setLogList(allLogs);
    }
    fetchLogsFromBackend();
  }, []) // give it an empty array to only run once on load (or twice in React 18 strict mode in development)

  return (
    <>
      <Header />
      <LoginForm color="red"/>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllLogsPage logList={logList}/>} />
          <Route path="/steps" element={<StepsPage logList={logList} />} />
          <Route path="/water" element={<WaterPage logList={logList} />} />
          <Route path="/calories" element={<CaloriePage logList={logList} />} />
          <Route path="/logs/new" element={<LogFormPage onSubmit={addLog} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
