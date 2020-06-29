import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

export {
    checkForName,
    handleSubmit
   }

console.log(checkForName);


const getAll = async () => {
    const response = await fetch('http://localhost:8081/all');
    try {
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('error', error);
        return error;
    }
}
getAll();