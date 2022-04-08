// List user's followers

// CSV
// serialized data
let followersAsString = "applejackson25,username2,spooderman,n00bmaster,cj_jhonson,leroyjenkins,tarnished,bigsmoke"

let displayFollowers = function (usernamesCSV) {
    let followersAsArray = usernamesCSV.split(",")

    let html = "<ul>"
    for (let index = 0; index < followersAsArray.length; index += 1) {
        let username = followersAsArray[index]
        console.log(username)
        html += "<li>" + username + "</li>"
    }
    html += "</ul>"

    document.write(html)
}

displayFollowers(followersAsString)

let generateSeeds = function (seedCount=8) {
    let seeds = []
    for (let count = 0; count < seedCount; count += 1) {
        seeds.push(Math.random())
    }

    return seeds
}

// https://picsum.photos/seed/${seed}/200/300
// Math.random()

// <main>
//      <img src="https://picsum.photos/seed/${Math.random()}/200/300">
//      <img src="https://picsum.photos/seed/${Math.random()}/200/300">
//      <img src="https://picsum.photos/seed/${Math.random()}/200/300">
// </main>

let displayGallery = function (seeds) {
    let html = "<main>"
    for (let index = 0; index < seeds.length; index += 1) {
        let currentSeed = seeds[index]
        html += `
            <img 
                src="https://picsum.photos/seed/${currentSeed}/200/300"
                alt="Randomly-selected image"
            >
        `
    }
    html += "</main>"

    document.write(html)
}

let seeds = localStorage.getItem("seeds") // Attempt to get the seeds from LocalStorage
if (seeds === null) { // If we got null, then this is a first-time visitor and we need to generate seeds from scratch and store them
    seeds = generateSeeds()
    localStorage.setItem("seeds", seeds)
} else { // If "seeds" is not null, then we know we should have seeds in a comma-delimited string format ("0.123,0.456,0.789")
    seeds = seeds.split(",") // So we'll split it on the commas to turn it into a real array
}

displayGallery(seeds) // By this point, either way, "seeds" should be an array of random seed values