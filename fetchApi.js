



export const genericFetchUsers = async (url, method, token) =>
fetch(url, { method, headers: {"Content-Type": "application/json",
Accept: "application/json",
Authorization:'Bearer ' + token} } ).then(res => {
  console.log("fetch", res)
  console.log('token', token)
    if (!res.ok) {
      console.log("not okay")
      throw new Error(res.status);
     
    }
    return res.json();
  })


export const genericFetch = async (url, method, body) =>
  fetch(url, { method, headers: {"Content-Type": "application/json",
  Accept: "application/json"}, body } ).then(res => {
    console.log("fetch", res)
      if (!res.ok) {
        console.log("not okay")
        throw new Error(res.status);
       
      }

      return res.json();
    })
  