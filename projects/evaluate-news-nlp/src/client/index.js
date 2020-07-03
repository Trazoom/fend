import { checkForName } from './js/nameChecker';
import { postData } from './js/formHandler';
import { handleSubmit } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

export {
    checkForName,
    handleSubmit,
    postData
   }

console.log(checkForName);
let noget = "";

const getAll = async () => {
    const response = await fetch('http://localhost:8081/all');
    try {
        const data = await response.json();
        console.log(data);
        return data;
        
    } catch(error) {
        console.log('error', error);
    }
}
console.log(getAll());
/*function logNoget() {
    getAll();
    console.log(noget);
}

logNoget();
console.log(noget.text);*/
