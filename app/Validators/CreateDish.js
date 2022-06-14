'use strict'

class CreateDish {
  get rules () {
    return {
        title :'required',
        link :'required',
        description:'required'
    }
  }

  get messages(){
    return {
      'required':'Aww! Seems you missed {{field}}, please check again.'
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error)
    .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateDish
