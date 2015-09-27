# window.run

This is a small helper function which will try your function and catch any errors that may occur. The purpose of it is simple ; Run the function and catch erroneous code to prevent any damage during runtime. 

### Examples

**1. Automatic error catching**

``congole`` is undefined so this exeception will automatically be caught, thus allowing JavaScript to continue executing as if nothing went wrong.
```javascript
run(function() {
  congole.log('Hi !');
});

console.log('Phew, that was close..');
```


**2. Handling errors**

To handle errors or view the error object, you can attach ``handle`` to the end of run. The function passed to ``handle`` will only be executed if an error occurs.
```javascript
run(function() {
  congole.log('Hi !');
})
.handle(function(err) {
  console.log(err); // log error object
  console.log('Sorry, I meant console.');
});
```
