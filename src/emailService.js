

export const getAllEmails = async () => {
  try {
    const response = await fetch("http://localhost:3004/emails")
    if(!response.ok) {
      return { data: [], error: response.statusText }
    }
    const data = await response.json()
    return { data: data, error: null }
  } catch(error) {
    return { data: [], error: error.message }
  }
}

export const postEmail = async (newEmailData) => {
    const response = await fetch("http://localhost:3004/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmailData)
    })
    const data = await response.json()
    return data
}

export const deleteEmail = async (idToDelete) => {
  const response = await fetch("http://localhost:3004/emails/" + idToDelete, { method: "DELETE" })
}