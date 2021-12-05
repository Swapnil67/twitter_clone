# To map your data model to the database schema, you need to use the prisma migrate CLI commands:
# Creating migration for first time
--> npx prisma migrate dev --name init [--name: write your migration name]
This command does two things:
- It creates a new SQL migration file for this migration
- It runs the SQL migration file against the database
