import React from 'react'
import Image from 'next/image';

function Design() {
  return (
    <div>
      <div className='text-xl font-bold blue_gradient pb-2'>Design</div>
      <p>
      In implementing this application, we aimed to use concise, easy to manage and clear code to foster reusability and align with best code practices. As such, we made use of design patterns such as the Observer and Factory patterns to organize various classes. We also implemented the Adapter pattern throughout our code in order to ensure that many of the concurrent, synchronous actions that needed to occur during the applications runtime were done succinctly. Since we utilized Android Studio as our coding environment for this project, we abided by MVVM (Model-View-View Model) Architecture to implement our application. Models were represented by concrete classes like ingredients, recipes, and users which were utilized, adapted and augmented throughout the code.  In our View Models, we accessed our database, which was Firebase for this application, and created references in order to add to and access from in our views. We also implemented Strategy pattern in our View Models in order to access the different methods to sort data in our application: alphabetically, by date added, and calorically. In addition, we initialized our database using Singleton Class pattern, which allowed there to be only one database instance ever used in the code. This eliminated any potential problems that could arise by accessing the database incorrectly.  In our Views, we had all of the screens that comprise our application. So, by abiding by the structural requirements of MVVM, we were able to manage all the data held by the application.
        <br />
        <br />
      </p>
      <div className="font-bold">DCD</div>
      <Image src={'/CS2340-project-website/DCD_CS2340_Project.png'} alt='DCD' width={750} height={750}></Image>
      <p>
      This is the Design Class Diagram (DCD) that demonstrates the relationship between all the classes within our code. The User, Meal, Recipe, and Ingredient classes are represented by Models in our code and all carry their own attributes along with getters and setters. User is directly modified/authenticated by the View Model class LoginViewModel. LoginViewModel takes in a User instance and either logs the User in if the instance exists in the Firebase database, or creates a new User account if the instance is not found. The FoodDatabase View Model stores Meals, Recipes, and Ingredients and contains individual methods that modify what in Firebase and what information is attached to a users account. The FoodDatabase ensures that each user has an individualized database where their personal information is stored such as their ingredients and their meals. The last section of the DCD represents the implementation of Strategy Pattern, as the 3 concrete strategies of CaloricSort, AlphabeticSort, and ByDateSort are all implementations of the SortingStrategies interface. DataObserver is an implementation of the ObserverPattern and allows the FoodDatabase class to be augmented synchronously.  
      </p>

      <div className="font-bold mt-6">SD</div>
      <Image src={'/CS2340-project-website/sequence.png'} alt='SD' width={750} height={750}></Image>
      <p>
      Add an Ingredient: <br />
Main success scenario: <br />
A user opens the green plate app, enters their email and password then clicks the login button, the system does the authentication process and logs them in. They navigate to the ingredient screen, enter the ingredients information (name, calories, quantity) then click the add button, the system adds the ingredient for that user.
Alternate scenarios: <br />
When the user logs in, if the users email and password are not stored in the system, the system will not log them in, and prompt them to check their credentials.
If the user enters invalid inputs for the ingredient, such as negative calorie value, then the system will not add the ingredient and will notify the user of the error.
      </p> <br /> <br />

      <Image src={'/CS2340-project-website/sequence2.png'} alt='SD2' width={750} height={750}></Image>
      <p>
      Add an Ingredient: <br />
Main success scenario: <br />
A user opens the green plate app, enters their email and password then clicks the login button, the system does the authentication process and logs them in. They navigate to the ingredient screen, enter the ingredients information (name, calories, quantity) then click the add button, the system adds the ingredient for that user.
Alternate scenarios: <br />
When the user logs in, if the users email and password are not stored in the system, the system will not log them in, and prompt them to check their credentials.
If the user enters invalid inputs for the ingredient, such as negative calorie value, then the system will not add the ingredient and will notify the user of the error.
      </p>
      <br />
      <p><strong>In both scenarios, the sequence diagrams demonstrate how each class interacts with one another in the code. </strong></p>
    </div>
  )
}

export default Design