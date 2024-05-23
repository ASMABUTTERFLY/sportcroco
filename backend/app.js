//imporation des modeles
const express = require("express"); // import module express
const bodyParser = require("body-parser"); // import module body parser
const mongoose = require("mongoose");//import module mongoose 
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');//connect Express with DB
const app = express(); // création app BE app
// import module de cryptage
const bcrypt = require("bcrypt")
// import module de jsonwebtoken
const jwt = require('jsonwebtoken');
// import module de express session 
const session = require('express-session');
//import axios module
const axios = require('axios');
//importation Mutler 
const multer = require('multer');
//importation path
const path = require('path');
// bodyParser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );

    next();
});
//session configuration
// secretkey est la clé pour le codage et decodage selon l'envoie
const secretKey = 'your-secret-key';//on peut changer le message your secret key 
app.use(session({
    secret: secretKey,
}));
//shortCutPath= backend/uploads
//configuration image 
app.use('/shortCutPath', express.static(path.join('backend/uploads')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        if (isValid) {
            cb(null, 'backend/uploads')
        }
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});

//Models Importation 
const Match = require("./models/match")
const Team = require("./models/team")
const Player = require("./models/player")
const User = require("./models/user");



//statique Date base
// let matches=[
//     { id:1,scoreOne:0, scoreTwo:3,teamOne:'A',teamTwo:'B'},
//     { id:2,scoreOne:1, scoreTwo:3,teamOne:'RMDE',teamTwo:'FCBT'},
//     { id:3,scoreOne:3, scoreTwo:4,teamOne:'RMDT',teamTwo:'FCBB'},
//     { id:4,scoreOne:2, scoreTwo:1,teamOne:'RMDF',teamTwo:'FCBD'},
//     { id:5,scoreOne:0, scoreTwo:0,teamOne:'RMDF',teamTwo:'FCBA'},
//   ];
//Here Trait Logique  post 
app.post("/matches", (req, res) => {
    console.log("Here into BL : add Match", req.body);
    let matchObj = new Match(req.body)
    matchObj.save();
    res.json({ message: 'match added' })
})
//Here Trait Logique  get ALL Matches
app.get("/matches", (req, res) => {
    Match.find().then( //par anlogie la subscribe 
        (docs) => { console.log("Here matches", docs); res.json({ matches: docs }); });


})
//Here Trait Logique  get  Matches by Id
app.get("/matches/:id", (req, res) => {
    console.log("ok", req.params.id)
    //findbyID fonction predefinie ta3tini objet
    Match.findById(req.params.id).then(
        (doc) => {
            console.log("here doc", doc)
            res.json({ match: doc });

        })
    // let match=matches.find((item)=>item.id==req.params.id)
    // res.json({match:match})
})
//Here Trait Logique  Delete Matches
app.delete("/matches/:id", (req, res) => {
    console.log("Here into delete", req.params.id);
    // let pos=matches.findIndex((item)=>item.id==req.params.id);
    // matches.splice(pos,1)
    // console.log("match deleted")//tout ce traitement a ne pas utiliser car le tableur n'est plus statique

    Match.deleteOne({ _id: req.params.id }).then((deleleResponse) => {
        console.log("here reônse after delete", deleleResponse)
        console.log("here response after delete", deleleResponse);
        if (deleleResponse.deletedCount == 1) {
            res.json({ message: 'success' })
        } else {
            res.json({ message: 'Error' })
        }
    })
})


//Here Trait Logique  Update Matches
app.put("/matches", (req, res) => {
    console.log("here intp BL: Rdit MAtch", req.body)
    Match.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
        console.log('here  response', updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ message: 'Edited with success' })
        } else {
            res.json({ message: 'Error' })
        }
    })
    //     let index =matches.findIndex((obj)=>obj.id==req.body.id);
    // matches[index]=req.body;
    //    res.json({message : "ya asma hani zedtou"})
})
//APP got Team

app.post("/teams", (req, res) => {
    console.log("Here into BL : add Team", req.body);
    let team = new Team(req.body)
    team.save();
    res.json({ message: 'Team added' })
})
//Here Trait Logique  get ALL TEams
app.get("/teams", (req, res) => {
    Team.find().then(
        (docs) => { console.log("Here Teams", docs); res.json({ teams: docs }); });


})
//Here Trait Logique  get  Matches by Id
app.get("/teams/:id", (req, res) => {
    console.log("ok", req.params.id)
    //findbyID fonction predefinie ta3tini objet
    Team.findById(req.params.id).then(
        (doc) => {
            console.log("here doc", doc)
            res.json({ team: doc });

        })

})
//Here Trait Logique  Delete Teams
app.delete("/teams/:id", (req, res) => {
    console.log("Here team delete", req.params.id);

    Team.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log("here reônse after delete", deleteResponse)
        console.log("here response after delete", deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: 'success' })
        } else {
            res.json({ message: 'Error' })
        }
    })
})


//Here Trait Logique  Update team
app.put("/teams", (req, res) => {
    console.log("here intp BL: ", req.body)
    Team.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
        console.log('here  response', updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ message: 'Edited with success' })
        } else {
            res.json({ message: 'Error' })
        }
    })

})


//APP got Player

app.post("/players", (req, res) => {
    console.log("Here into BL : add player", req.body);
    // let playerObj = new Player(req.body)
    // playerObj.save();
    // res.json({ message: 'Player added' })
    Team.findById(req.body.tId).then((team) => {
        if (!team) {
            res.json({ msg: 'team not found' });
        } else {
            let player = new Player({
                name: req.body.name,
                age: req.body.age,
                nbr: req.body.nbr,
                position: req.body.position,
                teamId: team._id
            });
            player.save((err, doc) => {
                if (err) {
                    res.json({ msg: "player not saved" })

                } else {
                    team.playersId.push(doc);
                    team.save();
                    res.json({ msg: "player saved with success" })
                }
            });
        }
    });


});
//Here Trait Logique  get ALL Players
app.get("/players", (req, res) => {
    Player.find().then(
        (docs) => {
            console.log("Here Players", docs);
            res.json({ players: docs });
        });


})
//Here Trait Logique  get  Players by Id
app.get("/players/:id", (req, res) => {
    console.log("ok", req.params.id)
    //findbyID fonction predefinie ta3tini objet
    Player.findById(req.params.id).then(
        (doc) => {
            console.log("here doc", doc)
            res.json({ player: doc });

        })

})
//Here Trait Logique  Delete Player
app.delete("/players/:id", (req, res) => {
    console.log("Here player delete", req.params.id);

    Player.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log("here player delete", deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: 'success' })
        } else {
            res.json({ message: 'Error' })
        }
    })
})


//Here Trait Logique  Update player
app.put("/players", (req, res) => {
    console.log("here intp BL: ", req.body)
    Player.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
        console.log('here  response', updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ message: 'Edited with success' })
        } else {
            res.json({ message: 'Error' })
        }
    })

})

//APP got Users
//fonction signup
app.post("/users/signup", multer({ storage: storage }).single('img'), (req, res) => {
    console.log("Here into BL : add user", req.body);
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
        console.log("ya asma hani crypté", cryptedPwd);
        req.body.pwd = cryptedPwd;
        req.body.avatar = `http://localhost:3000/shortCutPath/${req.file.filename}`;
        let user = new User(req.body);
        user.save();
        res.json({ message: 'added' });
    });

});
//fonction login
app.post("/users/login", (req, res) => {
    console.log('ok hani logit', req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
        console.log('Here doc', doc);
        if (!doc) {
            res.json({ msg: "heck your email" })
        } else {
            //doc exist
            bcrypt.compare(req.body.pwd, doc.pwd).then(
                (pwdResult) => {
                    console.log("ok", pwdResult);
                    if (!pwdResult) {
                        res.json({ message: 'chek pwd' })
                    } else {
                        let userToSend = {
                            role: doc.role,
                            firstName: doc.firstName,
                            lastName: doc.lastName,
                            tel: doc.tel,
                            id: doc._id,
                            avatar: doc.avatar
                        };
                        const token = jwt.sign(userToSend, secretKey, { expiresIn: '1h' });
                        res.json({ message: 'welcom', user: token })
                    }

                })
        }
    })
});
//get teams
app.get("/teamsPlayers", (req, res) => {
    Team.find().populate("playersId").then(
        (teamDocs) => {
            console.log("Here Players", teamDocs);
            res.json({ teams: teamDocs });
        });


})

//get players
app.get("/playersDeTeam", (req, res) => {
    Player.find().populate("teamId").then(
        (playerDocs) => {
            console.log("Here Players", playerDocs);
            res.json({ players: playerDocs });
        });


})

app.put("/users", (req, res) => {
    console.log("Here into BL update profile :", req.body);
    User.findOne({ _id: req.body.userId }).then((doc) => {
        console.log("Here doc profile :", doc);
        if (!doc) {
            res.json({ message: "user not found" })
        } else {
            bcrypt.compare(req.body.oldPwd, doc.pwd).then((pwdResult) => {
                console.log("Here result check pwd", pwdResult);
                if (!pwdResult) {
                    res.json({ message: "check your old password" })
                } else {
                    bcrypt.hash(req.body.newPwd, 10).then((cryptedPwd) => {
                        console.log("here cryptedPwd :", cryptedPwd);
                        let newObj = { tel: req.body.tel, pwd: cryptedPwd };
                        User.updateOne({ _id: req.body.userId }, newObj).then((editResult) => {
                            console.log("here edit result : ", editResult);
                            if (editResult.nModified == 1) {
                                res.json({ message: "edited with success" })
                            } else {
                                res.json({ message: "error" })
                            }
                        })
                    })
                }
            })
        }

    })

});
// fonction weather
app.post("/weather", (req, res) => {
    console.log("Here into BL : weather", req.body);
    let key = "a5f8f80ed24bb65caa8303f8b1d28103";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`;
    axios.get(apiURL).then(
        (apiResponse) => {
            console.log("hani jit men 3and axios", apiResponse.data);

            let weatherResponse = {
                temp: apiResponse.data.main.temp,
                humidity: apiResponse.data.main.humidity,
                pressure: apiResponse.data.main.pressure,
                speed: apiResponse.data.wind.speed,
                description: apiResponse.data.weather[0].description,
            }
            res.json({ apiRes: weatherResponse });
        })


})



module.exports = app; // make app exportable