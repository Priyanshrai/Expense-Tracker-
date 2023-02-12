const myForm = document.querySelector('#my-form');
const expenseAmountInput = document.querySelector('#expenseAmount');
const descriptionInput = document.querySelector('#description');
const CategoryInput = document.querySelector('#Category');
const msg = document.querySelector('.msg');
const expenses = document.querySelector('#Expenses');


function saveToLocalStorage(event) {
    

      const obj = {
        Expenses: expenseAmountInput.value,
        Description: descriptionInput.value,
        Category: CategoryInput.value
    }
    localStorage.setItem(obj.Description, JSON.stringify(obj));
    showNewUserOnScreen(obj)


}
window.addEventListener("DOMContentLoaded", () => {

    const localStorageObj = localStorage;
    const localstoragekeys = Object.keys(localStorageObj)

    for (var i = 0; i < localstoragekeys.length; i++) {
        const key = localstoragekeys[i];
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})


function showNewUserOnScreen(user) {
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.Description}>  
                            ${user.Expenses} - ${user.Description} - ${user.Category}   
                            
                            <button class="btn btn-warning btn-sm"  onclick=editUserDetails('${user.Expenses}','${user.Description}','${user.Category}')>Edit User </button>
                            <button class="btn btn-danger btn-sm"  onclick=deleteUser('${user.Description}')> Delete User </button>
                          
                           
                         </li>` //esa likha aayga

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
// edit User

function editUserDetails(Expenses,Description,Category) {

    expenseAmountInput.value=Expenses;
    descriptionInput.value=Description;
    CategoryInput.value=Category;

    deleteUser(Description)
}

// deleteUser('abc@gmail.com')

function deleteUser(Description) {

    localStorage.removeItem(Description);
    removeUserFromScreen(Description);

}

function removeUserFromScreen(Description) {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(Description);

    parentNode.removeChild(childNodeToBeDeleted)
}
