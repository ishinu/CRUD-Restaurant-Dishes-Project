'use strict'

const Food=use('App/Models/Food')

class FoodController {

    async home({view}){

        /*
        //Create a dish
        const food=new Food;
        food.title='Sambhar Tadka';
        food.link='https://sambhar.com';
        food.description='Mixture of non resilient masalas mixed with bhatti butter tandoor';

        await food.save();
        */

        //Fetch a dish
        const foods= await Food.all();

        return view.render('dishes',{ foods: foods.toJSON()})
    }

    async userIndex({view ,auth}){
        const foods = await auth.user.serve().fetch();

        return view.render('serve', { foods: foods.toJSON() });
    }

    async create({request,response,session,auth}){
        const food = request.all();

        const posted = await auth.user.serve().create({
            title: food.title,
            description: food.description,
            link: food.link
        })

        session.flash({message: 'Your Dish has been posted'});
        return response.redirect('back');
    }

    async delete({response,session,params}){
        const food = await Food.find(params.id);

        await food.delete();
        session.flash({message:' Your Dish has been deleted'});
        return response.redirect('back');
    }   

    async edit({params,view}){
        const food= await Food.find(params.id);
        return view.render('edit',{ food: food});
    }

    async update({response,request,session,params}){
        const food= await Food.find(params.id);

        food.title = request.all().title;
        food.link = request.all().link;
        food.description = request.all().description;

        await food.save();

        session.flash({ message: 'Your Dish has been updated!'});
        return response.redirect('/dishes');
        
    }

}

module.exports = FoodController
