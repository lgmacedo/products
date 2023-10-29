# Products ERP

This is a full-stack application for the management of products in a ERP system. You can view data of all products in a table and you can also register new products in it.

# Setup

This repository contains two folders: "backend" and "frontend". The first contains the API of the application, and it was built with the NestJS framework. The other contains a Single-Page Application (SPA) that interacts with the API, and it was built with Next.js. Here are some steps on how to make this full-stack application work:

1. Install all dependencies needed by the application. With Node Package Manager (NPM) installed in your machine, the first step will be using the command below:

```bash
$ npm install
```

IMPORTANT: This command should be executed in both "backend" and "frontend" folders.

## Back-end setup

2. To run the back-end, a .env file should be created on its folder, containing these values:

  DATABASE_URL: this is the address of your PostgreSQL database.
  PORT(optional): this is the port where the API will be waiting for requests. If not defined, custom value is 3000. Setting a different value is highly recommended, as you may face troubles with the front-end, which also uses the port 3000.

3. Apply database migrations on the back-end folder

```bash
$ npx prisma migrate dev
```

4. Run the seed file in the database

```bash
$ npm run seed
```

5. Now it it time to start the server

```bash
$ npm start
```

## Front-end setup

6. To run the front-end, a .env.local file should be created on its folder, containing this value:

  NEXT_PUBLIC_BACKEND_URL: this is the address of where the API is waiting for request. In your machine, it will be 'http://localhost:{PORT}', and PORT should be the value you chose in step 2.

7. Now it is time to build and start the SPA

```bash
$ npm run build
$ npm start
```

Now the application is running in your machine, and it is available in 'http://localhost:3000' by default.

# Automated testing

Integration tests were implemented in the back-end. In the "backend" folder, the command below will run these tests.

```bash
$ npm run test:e2e
```

# Questions

## "What would be your first improvements if you had more implementation time?"

If I had more implementation time, the first thing I would do is making a better looking layout for the SPA. It is still quite basic and I think that making it look better would improve a lot of the user experience. 
Then I would add an authentication feature, which is something very important and quite common to have in almost every application these days.
I would also develop more tests for the back-end, including unit testing, which I think it would be a nice complement to the initial integration tests I already did.
The last thing I would like to do is use Docker to containerize this application, not only making the image of it available on DockerHub but also using the image for deployment on services like the EC2 of AWS.
Then I would implement the extra features that the client has listed which would be useful for their daily work.

## "Thinking about your solution, how would maintenance be in case of adding new product categories? What would need to be changed?"

For adding new product categories, it would only be needed to insert them on the "categories" table of the application database. Not much would need to be changed. Inserting the new category in the DB would make it automatically appear on the SPA when the user chooses to add a new Product, since the /add path of the front-end always makes a request for the API to know which categories are available to label the new product to be registered. I also think that adding a feature that allows the user to create a new category of products as he registers his new product on the SPA would also be a valuable asset to this project.

## "What changes would need to be made to support updates in the product category's discount percentage so that whenever the discount percentage was changed, the new price would be reflected in all products of the same category?"

The promotional price is not established in the DB. The API is constantly calculating it through the discount percentage received from the DB before showing the value to the user. So, changing the discount percentage directly in the database or implementing an API endpoint for that would make that the next time the user opens up the dashboard of products, all products which the discount percentage was changed would already appear with the new promotional prices.
















