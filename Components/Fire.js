import * as firebase from 'firebase';
class Fire {
    constructor() {
        this.init();
        this.observeAuth();
      }
    init = () =>{
        if(!firebase.apps.length){
        const firebaseConfig = {
        apiKey: "AIzaSyDoZkDhN1KzecFTB3rFyWARoN8Eq4x75Lk",
        authDomain: "fir-project-e8901.firebaseapp.com",
        databaseURL: "https://fir-project-e8901.firebaseio.com",
        projectId: "fir-project-e8901",
        storageBucket: "fir-project-e8901.appspot.com",
        messagingSenderId: "161953569216",
        appId: "1:161953569216:web:c6d5bcaf6a9650b22e1025",
        measurementId: "G-NDQT93QD7R"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
}
    observeAuth = () =>{
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    }
    onAuthStateChanged = user => {
        if (!user) {
          try {
            // 4.
            firebase.auth().signInAnonymously();
          } catch ({ message }) {
            alert(message);
          }
        }
      };
      // 1.
     ref() {
        return firebase.database().ref('messages');
    }
    // 2.
    on = (callback) =>{
        refer = this.ref
        refer
            .on('child_added', snapshot => callback(this.parse(snapshot)));
    }
    parse = (snapshot) => {
          
            const { timestamp: numberStamp, text, user } = snapshot.val();
            const { key: _id } = snapshot;
            const timestamp = new Date(numberStamp);
            const message = {
                _id,
                timestamp,
                text,
                user,
            };
            return message;
    }
    off() {
        this.ref.off();
    }


    append = message => {
        this.ref.push(message);
    }


    get uid() {
    return (firebase.auth().currentUser || {}).uid;
    }
    get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
    }
  
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
        const { text, user } = messages[i];
        const message = {
            text,
            user,
            timestamp: this.timestamp,
        };
        this.append(message);
        }
  };
}
export default Fire;