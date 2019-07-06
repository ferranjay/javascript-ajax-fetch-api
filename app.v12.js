/** 
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Ferran Jay
 * @license MIT
 * 
 */

class EasyHTTP {
    // Make an HTTP GET request
    // turn functions into async functions
    async get(url) {
    //    return new Promise((resolve, reject) => {
    //        fetch(url)
    //        .then(res => res.json())
    //        .then(data => resolve(data))
    //        .catch(err => reject(err));
    //    });
    //    OLD VERSION

    //    new version , compacter version
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }

    // Make an HTTP POST request 
    async post(url, data) {
       // return new Promise((resolve, reject) => {
           const response = await fetch(url, {
               method: 'POST',
               headers: {
                   'Content-type': 'application/json'
               }, 
               body: JSON.stringify(data)
           })
        //    .then(res => res.json())
        //    .then(data => resolve(data))
        //    .catch(err => reject(err));
       //});
            const resData = await response.json();
            return resData;
    }

    // Make an HTTP PUT request 
    async put(url, data) {
    //    return new Promise((resolve, reject) => {
    //    put it in a variable 
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
        });
            const resData = await response.json();
            return resData;
    }

    // Make an HTTP DELETE request 
    async delete(url) {
        const response = await fetch(url, {
               method: 'DELETE',
               headers: {
                   'Content-type': 'application/json'
               }
           });

           const resData = await 'resource deleted...';
           return resData;
       }
}