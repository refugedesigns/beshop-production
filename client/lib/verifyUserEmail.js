
export const verifyUserEmail = async(userInfo) => {
    return fetch("http://localhost:8000/api/v1/auth/verify-email", {
        method: "POST",
        credentials: "include",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(userInfo)
    }).then((response) => response.json()).catch((err) => err.json())
}