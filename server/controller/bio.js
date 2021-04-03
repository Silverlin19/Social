const controller = require('./controller')

module.exports = function fetchBio () {

    const bio = controller.getBio()

    console.log(bio)

    return (
        <div id="bio">
            <div id="contents">
                <div id="name"> {bio.name} </div>
                <div id="about"> {bio.bio} </div>
                <div id="social"> {bio.twitter}{bio.instagram}{bio.facebook} </div>
            </div>
        </div>
    )
}