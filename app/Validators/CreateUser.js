'use strict'

class CreateUser {
  get rules () {
    return {
      'username':'required|unique:users',
      'email':'required|unique:users',
      'password':'required'
    }
  }

  get messages(){
    return{
      'required':'Ohh! Please check {{ field }} , by mistake left empty!',
      'unique':'{{field}} already exist! Please select new'
    }
  }
  
  async fails(error) { 
    this.ctx.session.withErrors(error)
    .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateUser
