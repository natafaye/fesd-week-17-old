import { useState } from "react"

export default function EmailsTable({ emailList, removeEmail }) {
    const [categoryFilter, setCategoryFilter] = useState("")

    const filteredEmails = categoryFilter ? emailList.filter(email => email.category === categoryFilter) : emailList

    return (
        <>
            <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className="form-select my-3">
                <option value="">All</option>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
            </select>
            <table className="table">
                <thead>
                    <tr>
                        <td>Subject</td>
                        <td>Category</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmails.map(email => (
                        <tr key={email.id}>
                            <td>{email.subject}</td>
                            <td>{email.category}</td>
                            <td><button onClick={() => removeEmail(email.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}