import 'whatwg-fetch';
import 'babel-polyfill';
import thunk from 'redux-thunk';

let customer;

const API_URL = 'https://api.servicemonster.net/v1';
const API_HEADERS = {
  authorization: "Basic ZTZleGc0Nkw6bUM0RHM5MXFnZXdPUzFv",
  'Content-Type': "application/json"
}

const fetchOrderGUID = (jobID) => {
  return fetch(`${API_URL}/orders?q=${jobID}`, { headers: API_HEADERS })
    .then((response) => response.json())
}

const fli = (guid) => {
  return fetch(`${API_URL}/orders/${guid}`, { headers: API_HEADERS })
    .then((response) => response.json())
}

let ServiceMonsterAPI = {

  fetchLineItems(jobID) {
    //  let jobID = "18580"
     let guid = "";
    console.log('>> ' + jobID)
    return fetchOrderGUID(jobID).then((guid) => {
      console.log(guid)
      return fli(guid.items[0].orderID).then((order) => {
        console.log(guid)
        if (order.lineItems.length <= 1) {
          console.log('ERROR: was unable to retrieve data from Servicemonster or there were no items to parse')
          return response.json();
        }
        for (var value of order.lineItems) {
          if (!value.itemName || !value.description) {
            console.log('ERROR: no itemnames or descriptions in line items')
            return response.json();
          }
        }
        for (var value of order.lineItems) {
          var num = parseInt(value.rowIndex) + 1;
          value.title = guid.items[0].accountName + " Rug Number " + num;
          value.accountName = guid.items[0].accountName;
        }
        return order;
      }).then((order) => {
        return order.lineItems
      })
    })

  }
};

export default ServiceMonsterAPI;

