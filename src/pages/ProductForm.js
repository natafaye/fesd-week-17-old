import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ProductForm({ onSubmit, initialValues, departmentList, loadingDepartments }) {
    const [nameValue, setNameValue] = useState(initialValues ? initialValues.name : "")
    const [priceValue, setPriceValue] = useState(initialValues ? initialValues.price : 10)
    const [departmentValue, setDepartmentValue] = useState(initialValues ? initialValues.department : "")
    
    const navigate = useNavigate()

    const handleSubmitClick = (event) => {
        event.preventDefault() // don't refresh the page

        const formData = {
            name: nameValue,
            price: parseInt(priceValue), // because number input gives a string value
            department_id: parseInt(departmentValue), // because selects always give a string value
            id: initialValues ? initialValues.id : null
        }
        onSubmit(formData)

        navigate("/")
    }

    return (
        <form>
            <label className="form-label">Name</label>
            <input type="text" value={nameValue} className="form-control" onChange={(event) => setNameValue(event.target.value)} />
            <label className="form-label">Price</label>
            <input type="number" value={priceValue} className="form-control" onChange={(event) => setPriceValue(event.target.value)} />
            <label className="form-label">Department</label>
            <select 
                disabled={loadingDepartments}
                value={departmentValue} 
                className="form-control" 
                onChange={(event) => setDepartmentValue(event.target.value)}
            >
                { loadingDepartments ? <option>Loading...</option> : null }
                { departmentList.map(department => (
                    <option value={department.id}>{department.name}</option>
                ))}
            </select>
            <button className="btn btn-primary mt-4" disabled={loadingDepartments} onClick={handleSubmitClick}>Submit</button>
        </form>
    )
}