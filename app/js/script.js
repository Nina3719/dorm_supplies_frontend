const form = document.forms[0]

function register() {
  var data = {}
  if(form.name.value) data.name = form.name.value
  if(form.email.value) data.email = form.email.value
  if(form.classYear.value) data.classYear = form.classYear.value
  if(form.password.value) data.password = form.password.value

  console.log(data)

  fetch('/register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }).then(function(res){
    res.json()
    .then(function(user){
      alert(JSON.stringify(user))
    })
    console.log(res)
  }).catch(function(err){
    console.log(err)
  })
}

function addItem() {
  var data = {}
  if(form.name.value) data.name = form.name.value
  if(form.price.value) data.price = form.price.value
  if(form.quantity.value) data.quantity = form.quantity.value
  if(form.description.value) data.description = form.description.value

  console.log(data)

  fetch('/additem', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }).then(function(res){
    res.json()
    .then(function(item){
      alert(JSON.stringify(item))
    })
    console.log(res)
  }).catch(function(err){
    console.log(err)
  })
}

function email() {
  if(form.email.value){
    email = form.email.value
  }
}

function update() {
  // var data = {}
  // if(form.name.value) data.name = form.name.value
  // if(form.email.value) data.email = form.email.value
  // if(form.classYear.value) data.classYear = form.classYear.value
  // if(form.password.value) data.password = form.password.value
  //
  // console.log(data)
  //
  // fetch('/register', {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   method: 'POST',
  //   body: JSON.stringify(data)
  // }).then(function(res){
  //   res.json()
  //   .then(function(user){
  //     alert(JSON.stringify(user))
  //   })
  //   console.log(res)
  // }).catch(function(err){
  //   console.log(err)
  // })
}
