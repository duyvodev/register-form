const url = "http://localhost:3000/animal"

async function fetchData() {
    return await (await fetch(url)).json()
}

function createData(data) {
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(url, options)
}

function deleteData(id) {
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    };
    fetch(url + "/" + id, options)
}

function editData(id, data) {
    var options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    };
    fetch(url + "/" + id, options)
}



export { fetchData, createData, deleteData, editData }