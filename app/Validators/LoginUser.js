'use strict'

class LoginUser {
  get rules () {
    return {
      'email':'required|email',
      'password':'required'
    }
  }

  get messages(){
    return{
    'required':'Ohh, By mistake left {{field}} ? Please fill this one.',
    }
  }

  async fails(error) { 

    this.ctx.session.withErrors(error)
    .flashAll();

    return this.ctx.response.redirect('back');

  }


}

module.exports = LoginUser
