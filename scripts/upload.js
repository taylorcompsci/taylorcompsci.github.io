

async function duplicateChecker(xd) 
{
    var returnValue = false;
    await fetch("https://5xu2xfigc4.execute-api.us-east-1.amazonaws.com/deployment", {
        "method": "POST",
        body: JSON.stringify({"Action":"Access"})
        
    }).then(response => {
        if(!response.ok)
            console.log("Error occured!");

        return response.json();
    }).then(data => {
        const projects = JSON.parse(data).body;

        for (let i = 0; i < projects.length; i++)
        {
            //console.log(projects[i].Name);
            if (projects[i].Name === xd) returnValue = true;
        }
    });
    console.log(returnValue);
    return returnValue;
}
function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

async function uploadPrj(name, projectLink, imageLink)
{
    fetch("https://5xu2xfigc4.execute-api.us-east-1.amazonaws.com/deployment", {
        method: "POST",
        body: JSON.stringify({
            "Action":"Add",
            "Name" : name,
            "imageLink" : imageLink,
            "projectLink" : projectLink
        })
        
    })
    .then(response => {
        if(!response.ok)
            console.log("Error occured!");

        return response.json();
    })
    .then(data => {
        alert(JSON.parse(data).body);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("database upload failed.");
    });
}


async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const nameInput = document.getElementById('Name').value;
    const projectInput = document.getElementById('projectLink').value;
    
    //basic input validation, seperate from the apis to prevent overload
    
    if (await duplicateChecker(nameInput)) 
    {
        alert("duplicate Name");
        return;
    }
    if (!isValidHttpUrl(projectInput))
    {
        alert("Not a valid url for your project");
        return;
    }
    
    //TODO profanity check and stuff but I'm too lazy
    if (fileInput.files.length === 0) {
        alert("Please select a image for your project (it would be very hard for us to give an idea of what your project looks like if don't)");
        return;
    }


    let file = fileInput.files[0]; // Get the first file
    let s3RequestUrl = "https://pwf8tronzb.execute-api.us-east-1.amazonaws.com/";
    if (file)
    {
        let filetype = file.type;
        await fetch(s3RequestUrl, 
            {
                method : "POST",
                body : JSON.stringify({
                    "type" : filetype
                })
            }
        )
        .then(response => response.json())
        .then(async data => {
            console.log("Success:", data);
            if (data.hasOwnProperty("message")) 
            {
                alert(data.message);
                return;
            }
            console.log(file);
            let buffer = await file.arrayBuffer();
            let binary = new Uint8Array(buffer)
            let photo = await sendFile(file, data.uploadURL, data.Key);
            console.log(photo);
            console.log(nameInput);
            console.log(projectInput);
            uploadPrj(nameInput, projectInput, photo)
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }  
    
    
}

const s3bucketurl = "https://s3uploader-s3uploadbucket-tq9a4r3c6lrm.s3.us-east-1.amazonaws.com/";
async function sendFile(formData, url, key) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", formData.type);
    await fetch(url, { // Replace with your API endpoint
        method: "PUT",
        headers : myHeaders,
        body: formData
    })
    .then(data => {
        console.log("Success:", data);
        alert("File uploaded successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("File upload failed.");
    });
    return s3bucketurl + key;
}