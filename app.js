var Nathan = {
  firstname: 'Nathan',
  lastname: 'Dalton',
  address: {
    street: '5000 Via Zapatos',
    city: 'Riverside',
    state: 'CA'
  }
};

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(Nathan);

greet({
  firstname: 'Mary',
  lastname: 'Doe'
});

Nathan.address2 = {
  street: '4000 Via Zapatos'
}
