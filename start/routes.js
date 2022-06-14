'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')
Route.get('/dishes','FoodController.home');
Route.on('/dishes').render('dishes')

Route.on('/signup').render('auth.signup')
Route.post('/signup','UserController.create').validator('CreateUser');

Route.on('/login').render('auth.login')
Route.post('/login','UserController.login').validator('LoginUser');

Route.get('/logout', async({auth,response }) => {
    await auth.logout();
    return response.redirect('/');
})

Route.get('/post','FoodController.userIndex');
Route.post('/post','FoodController.create').validator('CreateDish');

Route.get('/post/edit/:id','FoodController.edit');
Route.get('/post/delete/:id','FoodController.delete');
Route.post('/post/update/:id','FoodController.update').validator('CreateDish');

