import { useEffect, useState } from "react";
import EmailsTable from "./EmailsTable";
import SendEmailForm from "./SendEmailForm";
import { deleteEmail, getAllEmails, postEmail } from "./emailService";

export default function App() {
  const [emailList, setEmailList] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    const asyncFunction = async () => {
      setLoading(true)
      // render with loading true
      const { data, error } = await getAllEmails()
      setEmailList(data)
      setErrorMessage(error)
      setLoading(false)
      // render with loading false and email list loaded in
    }
    asyncFunction()
  }, [])

  const sendEmail = async (newEmailData) => {
    const createdEmail = await postEmail(newEmailData)
    setEmailList([...emailList, createdEmail])
  }

  const removeEmail = (idToDelete) => {
    deleteEmail(idToDelete)
    setEmailList(emailList.filter(email => email.id !== idToDelete))
  }

  return (
    <div class="container mt-3">
      <SendEmailForm sendEmail={sendEmail} disabled={loading}/>
      { loading && <p className="text-body-secondary">Loading...</p>}
      { errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      <EmailsTable emailList={emailList} removeEmail={removeEmail}/>
    </div>
  )
}