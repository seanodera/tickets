import {initializeApp} from 'firebase/app'
import {
    applyActionCode,
    checkActionCode,
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc} from 'firebase/firestore/lite';
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {faker} from "@faker-js/faker";


const firebaseConfig = {
    apiKey: "AIzaSyClMitpi6tZnmjJ2f0Sv55UWWL4VyBO_UU",
    authDomain: "ticketscy.firebaseapp.com",
    projectId: "ticketscy",
    storageBucket: "ticketscy.appspot.com",
    messagingSenderId: "22737860273",
    appId: "1:22737860273:web:1f83c95fce7060138a9490",
    measurementId: "G-S6GP9PPSYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

//get Events
async function getEvents() {
    const snapshot = await getDocs(collection(db, 'events'))

    return snapshot.docs.map(doc => doc.data());
}

async function addEvent(details) {


    try {
        const docRef = await addDoc(collection(db, 'events'), {
            "name": details.name,
            "price": details.price,
            "location": details.location,
            "Date": details.Date,
            "Time": details.Time,
            "description": details.description,
            "options": details.options,

        })
        let newUrl = await addImage(details.image, docRef.id);
        const theDoc = doc(db, 'events', docRef.id);
        const _docRef = await updateDoc(theDoc, {
            'id': docRef.id,
            'image': newUrl,
        })
        console.log("Document written with ID: ", _docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function updateEvent(details, id) {
    try {
        await updateDoc(doc(db, 'events', id), {
            "name": details.name,
            "price": details.price,
            "location": details.location,
            "Date": details.Date,
            "Time": details.Time,
            "description": details.description,
            "options": details.options,

        });
        let newUrl = await addImage(details.image, id);
        const theDoc = doc(db, 'events', id);
        await updateDoc(theDoc, {
            'id': id,
            'image': newUrl,
        });
        console.log("Document written with ID: ", id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function getPopular() {
    const snapshot = await getDocs(collection(db, 'general'))
    return snapshot.docs.map(doc => doc.data());
}

async function addImage(image, id) {
    let blob = await fetch(image).then(r => r.blob());
    let newURl;
    const posterRef = ref(storage, `posters/${id}`);
    let snapshot = await uploadBytes(posterRef, blob)
    console.log('Uploaded a blob or file!');
    newURl = await getDownloadURL(snapshot.ref)
    console.log('new url is:', newURl);
    return newURl;
}

async function signIn(email, pass) {
    console.log('function called');
    let success = true;
    let errorMessage = '';
    await signInWithEmailAndPassword(auth, email, pass).catch((e) => {
        success = false;
        errorMessage = e.message;
    })
    return {
        'success': success,
        'errorMessage': errorMessage,
    }
}

async function createUser(userDetails, pass) {
    console.log('function called', userDetails, 'and pass is', pass);
    let success = true;
    let errormessage = '';
    try {

        let userCredentials = await createUserWithEmailAndPassword(auth, userDetails.email, pass).catch((e) => {
            success = false;
            errormessage = e.message;
        })
        if (success) {
            await setDoc(doc(db, 'users', userCredentials.user.uid), userDetails);
        }
    } catch (error) {
        success = false;
        console.log(error);
    }
    return {
        'success': success,
        'errorMessage': errormessage,
    }
}

async function getUserDetails(id) {
    const snapShot = await getDoc(doc(db, 'users', id));
    const data = snapShot.data();
    console.log(data);
    return data;

}

async function getEventDetails(id) {
    const snapShot = await getDoc(doc(db, 'events', id));

    return snapShot.data();
}

async function sendPassReset(email) {
    await sendPasswordResetEmail(auth, email).catch((e) => {
        console.log(e)
    })
    return {
        success: true,
        text: '',
    }
}

function sendVerificationCode() {
    sendEmailVerification(auth.currentUser,).catch((e) => {
        console.error(e)
    });

}

async function recoverEmail(oob) {
    let info = checkOOB(oob);
    await applyActionCode(auth, oob);
    await sendPassReset(info.data.email);
    return info;
}

async function checkOOB(oob) {
    return await checkActionCode(auth, oob).catch((error) => {
        console.error(error)
        return null;
    });
}

async function makeReservation(id, count, optionId) {
    try {
        let docRef = await addDoc(collection(db, 'events', id, 'reservations'), {
            'userId': auth.currentUser.uid,
            'count': count,
            'optionId': optionId,
        })
        await addDoc(collection(db, 'users', auth.currentUser.uid, 'reservations'), {
            'reservationRef': docRef,
            'arrived': false,
        })

    } catch (error) {

    }
}

const getAdverts = () => {
    // {
    //   id: i.toString(),
    //       image: faker.image.nightlife(),
    //     title: 'Masshouse presents: Heavy K The DrumBoss',
    //     description: faker.lorem.paragraph(5),
    //     date: faker.date.soon(15),
    //     price: faker.commerce.price(0,100),
    //     location: faker.address.cityName(),
    //
    // }

    let list = [];
    for (let i = 0; i < 2; i++) {
        list.push({
            id: i.toString(),
            image: '/assets/cover3.jpg',
            title: faker.company.name(),
            description: faker.lorem.paragraph(5),
            date: faker.date.soon(15),
            price: faker.commerce.price(0, 100),
            location: faker.address.cityName(),

        })
    }
    return list
}

function getUser() {
    console.log('user gotten')
    return auth.currentUser;
}

 function logOut() {
    let success = false;
    signOut(auth).then(() => {
        success = true;
    }).catch(() => {
        success = false;
    });
    return success;
}


export {
    getEvents, addEvent, addImage, createUser, getPopular, signIn,
    getUserDetails, getEventDetails, sendPassReset, sendVerificationCode,
    recoverEmail, makeReservation, getAdverts, updateEvent, getUser, logOut
}