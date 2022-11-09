// Hamburger menu //
const menu = document.getElementById('hamburger')
const close = document.getElementById('close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
});
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
});


// RegisterationPopUp //
const registeration = document.getElementById('register')
const closePop = document.getElementById('closeForm')
const regPopUp = document.querySelector('.formContainer')

registeration.addEventListener('click', () => {
    regPopUp.classList.add('open-registerationPopUp')
    nav.classList.remove('open-nav')
});
closePop.addEventListener('click', () => {
    regPopUp.classList.remove('open-registerationPopUp')
});

// LogInPopUp //
const logIn = document.getElementById('login')
const closeLogInPop = document.getElementById('close2Form')
const LogInPopUp = document.querySelector('.form2Container')

logIn.addEventListener('click', () => {
    LogInPopUp.classList.add('open-logInPopUp')
    nav.classList.remove('open-nav')
});
    closeLogInPop.addEventListener('click', () => {
    LogInPopUp.classList.remove('open-logInPopUp')
});

// Registeration //
let userData = JSON.parse(localStorage.getItem('userData')) || [];
function registerUser(){
    let username = document.getElementById('id').value
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value;
    const newUser ={
        username,
        password,
        email,
        voted:[]
    }
    if (localStorage.getItem("userData") === null){
        userData.push({newUser});
        localStorage.setItem('userData', JSON.stringify(userData));
        document.getElementById('lomakeH1').innerHTML = ('Kiitos rekisteröitymisestä')
        setTimeout(() => regPopUp.classList.remove('open-registerationPopUp'), 1000);
        document.getElementById('lomake').reset();
    }else{
        for(let i = 0; i < userData.length; i++){
            console.log(userData[i].newUser.username)
            if(userData[i].newUser.username === document.getElementById('id').value){
                console.log(username + ' on olemassa')
                document.getElementById('lomakeH1').innerHTML = ('Olet jo rekisteröitynyt!')
                setTimeout(() => regPopUp.classList.remove('open-registerationPopUp'), 1000);
            }
            else{
                userData.push({newUser});
                localStorage.setItem('userData', JSON.stringify(userData));
                document.getElementById('lomakeH1').innerHTML = ('Kiitos rekisteröitymisestä')
                setTimeout(() => regPopUp.classList.remove('open-registerationPopUp'), 1000);
                document.getElementById('lomake').reset();
                return;
            }
        }

    }
}


// login //
function signIn(){
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    let username = document.getElementById('idLogIn').value
    let password = document.getElementById('passwordLogIn').value

    if(username == 'admin' && password == 'asd123'){
        console.log('admin logged in')
        sessionStorage.setItem('currentLoggedIn','admin');
        document.getElementById('myAccount').style.display='list-item'
        document.getElementById('login').style.display='none'
        LogInPopUp.classList.remove('open-logInPopUp')
        window.location.reload();
        return;
    }else{
        let userData = JSON.parse(localStorage.getItem('userData')) || [];
        let usernameX = document.getElementById('idLogIn').value
        let passwordX = document.getElementById('passwordLogIn').value
        for(let i = 0; i < userData.length; i++){
            console.log(userData[i].newUser.username)
            if(userData[i].newUser.username == usernameX && userData[i].newUser.password == passwordX){
            console.log('osui')
            sessionStorage.setItem('currentLoggedIn',usernameX);
            document.getElementById('myAccount').style.display='list-item'
            document.getElementById('login').style.display='none'
            LogInPopUp.classList.remove('open-logInPopUp')
            window.location.reload();
            return;
            }
            else{
                document.getElementById('logInHeader').textContent='incorrect Username or Password';
            }
            
        }
    }
}
// password reset //
function resetPassword(){
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    let input = document.createElement('input')
    let button = document.createElement('button')
    let div = document.createElement('div')
    document.getElementById('forgot').style.display='none'

    document.querySelector('.newPwd').appendChild(div)
    div.appendChild(input)
    div.appendChild(button)
    input.setAttribute('id', 'emailToSend')
    input.setAttribute('placeholder', 'email')
    button.textContent = 'send new password'
    button.addEventListener('click', function(){

        for(let i = 0; i < userData.length; i++){
            
            if(userData[i].newUser.email == document.getElementById('emailToSend').value && userData[i].newUser.username == document.getElementById('idLogIn').value){
                document.getElementById('logInHeader').innerHTML='Reset email has been sent!'
                setTimeout(() => LogInPopUp.classList.remove('open-logInPopUp'), 1000);
            }
            else{
                document.getElementById('logInHeader').innerHTML='Wrong username+email !'
            }
        }
    });
    

}
// user position //
let position = NaN
function currentUserIndex(){
    if(sessionStorage.getItem('currentLoggedIn')!= null && sessionStorage.getItem('currentLoggedIn') != 'admin'){
        let currentUser = sessionStorage.getItem('currentLoggedIn')
        let userData = JSON.parse(localStorage.getItem('userData')) || [];
        for(let i = 0; i < userData.length; i++){
            if(userData[i].newUser.username === currentUser){
                console.log(i)
                position = i
                console.log(position)
            }
        }
    }
}
currentUserIndex()
// userinfo for "Myaccount" //
function currentUserInfo(){
    if(sessionStorage.getItem('currentLoggedIn') == 'admin'){
        document.getElementById('currentUsername').innerText= 'Welcome Admin';
        document.getElementById('thisIsNewPwd').style.display='none';
        document.getElementById('changePwd').style.display='none';
    }
    if(sessionStorage.getItem('currentLoggedIn')!= null && sessionStorage.getItem('currentLoggedIn') != 'admin'){
        let currentUser = sessionStorage.getItem('currentLoggedIn')
        let userData = JSON.parse(localStorage.getItem('userData')) || [];
        for(let i = 0; i < userData.length; i++){
            if(userData[i].newUser.username === currentUser){
                document.getElementById('currentUsername').innerText= 'Username: ' + currentUser;
                document.getElementById('currentUserEmail').innerHTML= 'Email: ' + userData[i].newUser.email;
            }
        }
    }
}
// password reset //
function setPwd(){
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    userData[position].newUser.password = document.getElementById('thisIsNewPwd').value
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log(userData[position].newUser.password)
    console.log(document.getElementById('thisIsNewPwd').value)
    document.getElementById('thisIsNewPwd').value = '';


}


// User online boolean //

let userOffline = true;

function userIsOnline(){
    userOffline = false;
}
function userIsOffline(){
    userOffline = true;
}



let loggedin = sessionStorage.getItem('currentLoggedIn');
function testUserOnline(){
    if (sessionStorage.getItem('currentLoggedIn') === 'admin'){
        document.getElementById('myAccount').style.display='list-item'
        document.getElementById('login').style.display='none'
        document.getElementById('logout').style.display='list-item'
        document.getElementById('register').style.display='none'
        
        userIsOnline();
        console.log('user is offline ' + userOffline)

    }
    if (sessionStorage.getItem('currentLoggedIn')!= null){
        document.getElementById('myAccount').style.display='list-item'
        document.getElementById('login').style.display='none'
        document.getElementById('logout').style.display='list-item'
        document.getElementById('register').style.display='none'
        userIsOnline();
        console.log('user is offline ' + userOffline)

    }
    else{
        document.getElementById('myAccount').style.display='none'
        document.getElementById('login').style.display='list-item'
        document.getElementById('logout').style.display='none'
        document.getElementById('register').style.display='list-item'
        userIsOffline()
        console.log('user is offline ' + userOffline)
    }
}
testUserOnline()

function logOut(){
    sessionStorage.clear()
    userIsOffline()
}


// voting system //

function addOption(){
    // add voting option //
    let input = document.createElement('input')
    let li = document.createElement('li');
    document.querySelector('#options').appendChild(li);
    li.appendChild(input)
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'option');
    input.setAttribute('value', 'give option');
}
function removeOption(){
    // remove option //
    let element = document.querySelector('.option')
    let liElemenet = document.querySelector('li')
    liElemenet.remove()
    element.remove()
}



let data = JSON.parse(localStorage.getItem('data')) || [];

function tester(){
    let data = JSON.parse(localStorage.getItem('data')) || [];
    const newPoll = {
        questions: 'Best supehero?',
        answers:['Superman', 'Batman', 'Spongebob', 'Ironman'],
        value:[0, 15, 20, 18]
    }
    if(data.length > 0){
       console.log('dont worry, be happy')
    }else{
        data.push({newPoll})
        localStorage.setItem('data', JSON.stringify(data))
        parseData()
    }
}


function createApoll(){
    let ul = document.createElement("ul");
    let h2 = document.createElement("h2");
    let questions = document.querySelector('.pollQ').value;
    let options = document.querySelectorAll('.option')
    document.querySelector('.poll').appendChild(ul);
    ul.appendChild(h2)
    h2.textContent = questions
    // create new poll for localStorage //
    const newPoll = {
        questions,
        answers:[],
        value:[]
    }
    data.push({newPoll})
    localStorage.setItem('data', JSON.stringify(data))
    // create options for new poll //
    for (let i = 0; i< options.length; i++){
        let newOption = options[i].value;
        newPoll.answers.push(newOption)
        newPoll.value.push(0)
        localStorage.setItem('data', JSON.stringify(data));
    
        // create new options for DOM //
        let x = 0
        let li = document.createElement('li');
        let input = document.createElement('input')
        ul.appendChild(li)
        li.appendChild(input)
        input.setAttribute('type', 'button')
        input.setAttribute('value', newOption + ' ' + 'Votes: ' + x)
        input.setAttribute('class', 'voteButton')
        
        // add click & calculate clicks function for new buttons //
        input.addEventListener('click', function(){
            x++;
            console.log('clicked ' + newOption)
            input.setAttribute('value', newOption + ' ' + 'Votes: ' + x)
        });

    }
    console.log(data)
    removeOption();
    window.location.reload();

}
    // create polls for dom on load //
function parseData(){
    let data = JSON.parse(localStorage.getItem('data')) || [];
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    tester()
    
    // create polls structure from localStorage to DOM //
    for (let i = 0; i< data.length; i++){
        let ul = document.createElement("ul");
        let h2 = document.createElement("h2");
        let button = document.createElement("button");

        // create delete poll button //
        if (sessionStorage.getItem('currentLoggedIn') === 'admin'){
            button.setAttribute('class', 'deletePoll')
            button.setAttribute('id', 'deletePoll')
            button.textContent = 'Delete'
            ul.appendChild(button)
        
        // add delete function to button //
            button.addEventListener('click', function(){
                console.log('clicked ' + [i] + 'delete button')
                data.splice([i], 1)
                console.log(data)
                localStorage.setItem('data', JSON.stringify(data));
                window.location.reload();
            });
        }
        // create questions for polls //
        console.log(data[i])
        document.querySelector('.poll').appendChild(ul);
        ul.appendChild(h2)
        h2.textContent = data[i].newPoll.questions

        // create options for polls to DOM //
        for (let y = 0; y < data[i].newPoll.answers.length; y++){
            let li = document.createElement('li');
            let input = document.createElement('input')
            ul.appendChild(li)
            li.appendChild(input)
            input.setAttribute('type', 'button')
            input.setAttribute('class', 'voteButton')

            // create voting function for buttons //
            input.addEventListener('click', function(){
                //test if loggedin//
                if (userOffline == false){
                    //test if admin//
                    if(sessionStorage.getItem('currentLoggedIn') != 'admin'){
                        //test if allready voted//
                        if(userData[position].newUser.voted.includes(data[i].newPoll.questions)){
                            //inform if allready voted//
                            alert('Olet jo äänestänyt tätä')
                            return;
                        }else{
                            //vote and save data//
                            userData[position].newUser.voted.push(data[i].newPoll.questions)
                            localStorage.setItem('userData', JSON.stringify(userData));
                            data[i].newPoll.value[y]++
                            localStorage.setItem('data', JSON.stringify(data));
                            input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
                            return;
                        }
                    }
                }
                if(sessionStorage.getItem('currentLoggedIn') == 'admin'){
                    // you are admin, you dont have rules //
                    data[i].newPoll.value[y]++
                    localStorage.setItem('data', JSON.stringify(data));
                    input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
                }

            });
            input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
        
        }
    }
    if(sessionStorage.getItem('currentLoggedIn') == 'admin'){
        document.getElementById('options').style.display='grid'
    }

}



