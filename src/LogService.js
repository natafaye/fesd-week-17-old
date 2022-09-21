

export const fetchAllLogs = async () => {
    const response = await fetch(API + "/logs")
    const allLogs = await response.json();
    return allLogs
}