const setSessionCookie = async () => {
    const response = await fetch("https://localhost:8000/api/start_session", {
        credentials: 'include'  // Required to send/receive cookies
    })
    if (!response.ok) {
        throw new Error('Failed to fetch items');
    }
}
export default setSessionCookie