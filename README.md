# window.run

This is a small helper function which will try your function and catch any errors that may occur. In the event an error does occur, you can attach a handler onto ``run`` to handle the error.

### Examples

``congole`` is undefined so this exeception will automatically be caught and prevent any damage.
```javascript
run(function() {
  congole.log('Hi !');
});
```

To handle errors you can attach ``handle`` to the end of run.
```javascript
run(function() {
  congole.log('Hi !');
})
.handle(function(err) {
  console.log(err); // log error object
  console.log('Sorry, I meant console.');
});
```
