# Steps to Run
### Create Database
- Login to <a href="https://account.mongodb.com/account/login">mongodb</a>. Register for an account if you don't have one.
- Create a new Cluster (if this is your first time logging in, you will be prompted to do so). Name it anything you want.
- You will be prompted to create a new user for your cluster. Create the user and take note of the password for this user.
- You will be prompted to connect to the cluster and to choose a connection method. Choose "Drivers".
- Select "Mongoose" as the driver, then copy down the connection string. In the connection string, replace ```<password>``` with the password that you used for the user that you created previously. Remove the angle brackets.

### Clone
- Clone the repository into a directory
- In the terminal, run ```npm i```
- Create a .env file in the root directory. Make sure ```MONGODB_URI=YOUR_CONNECTION_STRING``` is inside the .env file. Replace YOUR_CONNECTION_STRING with the connection string that you copied down from your MongoDB cluster. You can also include ```PORT=5001``` in the .env file.

### Seed Database
- In the terminal, run ```npm run seed```. The console should read "Seeding the database, please wait..." and "DB connected".
- Wait for the database to finish seeding. There will be a message in the console of "Done seeding the database." when the seeding process is done.
  
### Run Server
- In the terminal, run either ```npm start``` or ```npm run dev```.
- The console should read "Listening: http://localhost:5001" when the server is successfully running.
- You can now run the frontend and use the app from the browser. This is a <a href="https://github.com/midorinom/space_blog">link</a> to the frontend repository and instructions on how to run it.

# Technologies Used
- ExpressJS, Typescript, Mongoose, MongoDB, dotenv, cors
