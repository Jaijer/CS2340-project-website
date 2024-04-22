import React from 'react'
import Image from 'next/image';


function Ui() {
  return (
    <div>
      <div className='text-xl font-bold blue_gradient pb-2'>UI</div>
      <div className='flex flex-col gap-3'>
        <div className="flex gap-4">
          <Image alt="screen" src={'/CS2340-project-website/login_screen.png'} width={250} height={800}></Image>
          <div className='flex justify-center items-center'>
            This is the login screen it lets users set up and
            account and keep everything private to them
            using Firebase authorization.
          </div>
        </div>

        <div className="flex gap-4">
          <Image alt="screen" src={'/CS2340-project-website/meal_screen.png'} width={250} height={800}></Image>
          <div className='flex justify-center items-center'>
          This is the input meal screen and the user can
input their meals and keep track of their calories
in the Home Screen.
          </div>
        </div>
      
        <div className="flex gap-4">
          <Image alt="screen" src={'/CS2340-project-website/ingredient_screen.png'} width={250} height={800}></Image>
          <div className='flex justify-center items-center'>
          This is the ingredient screen where the user can
see their pantry items. They can add ingredients
to it and also sort it by date added and calorie
count.
          </div>
        </div>

        <div className="flex gap-4">
          <Image alt="screen" src={'/CS2340-project-website/add_ingredient_screen.png'} width={250} height={800}></Image>
          <div className='flex justify-center items-center'>
          This is the add ingredient screen where the user
can see add an ingredient to their pantry items.
They can see this item in the ingredient screen.
          </div>
        </div>

        <div className="flex gap-4">
          <Image alt="screen" src={'/CS2340-project-website/recipe_screen.png'} width={250} height={800}></Image>
          <div className='flex justify-center items-center'>
          This is the recipe screen where the user can see
the ingredients needed for a recipe and if they
have enough ingredients to cook the recipe or not.
          </div>
        </div>

        <div className="flex gap-4">
          <Image alt="screen" src={'/CS2340-project-website/shoping_list_screen.png'} width={250} height={800}></Image>
          <div className='flex justify-center items-center'>
          This is the Shopping List screen where the user
can see add items to their shopping list. They can
use the buy button to buy the items to put in their
own pantry database.
          </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default Ui