import { useState } from "react"

export default function SendEmailForm({ sendEmail, disabled }) {
    const [subjectValue, setSubjectValue] = useState("")
    const [categoryValue, setCategoryValue] = useState("Personal")

    const onSubmit = (event) => {
        event.preventDefault()
        const newEmailData = {
            subject: subjectValue,
            category: categoryValue
        }
        sendEmail(newEmailData)
    }

    if(disabled) return null

    return (
        <form>
            <input type="text" value={subjectValue} onChange={(event) => setSubjectValue(event.target.value)} disabled={disabled} />
            <select value={categoryValue} onChange={(event) => setCategoryValue(event.target.value)} className="form-select" disabled={disabled}>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
            </select>
            <button onClick={onSubmit} disabled={disabled}>Send</button>
        </form>
    )
}