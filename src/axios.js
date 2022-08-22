import axios from "axios"

const instance = axios.create({
    baseURL: 'https://us-central1-prottoy-16bf0.cloudfunctions.net/stripe_payment'
    // baseURL:'http://localhost:5001/prottoy-16bf0/us-central1/stripe_payment'
});


export default instance;