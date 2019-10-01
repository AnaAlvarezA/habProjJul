# MyHabProject

This is my end of bootcamp project in Hack a BOS

It is the beginning of a project, which has yet to grow much more.

It is a Services Portal with the possibility of online booking, where you can explain and see how they work, with all the options and aspects to choose.
Different suppliers can include their services, in case they are interested in advertising in this portal.
Several clients can consult them, and if they are interested, they can proceed to their reservation. The process ends with the receipt of a confirmation email.

In the Backend I use Node, Express, Jsonwebtoken, Bcrypt, and as Database, MySql managed by Sequelize ORM.

Why did I decide to use this ORM?
This is the website where I found the answer:

https://npmcompare.com/compare/bookshelf,knex,objection,orm,sequelize

The data included in the database all have the same password: '12345678' encrypted, for making the task easier.
Attached to the documentation folder is a Dump, with its structure and data.

In the Frontend I use Angular

The back is started with the command 'node index'. The front, with 'ng serve -o'.
