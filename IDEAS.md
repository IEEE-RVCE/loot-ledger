## These are some ideas for the project. They are not necessarily in order of priority.

- User Roles
  In this application there is lot of hireachy but for sense of simplicity we can have only 2 roles. **Super Admin** and **User**. Super Admin has access to all the features of the application. User has access to only the features that are required for them to use the application restricted to their position.

make sure you note role and position are different. Role is the access level and position is the job title.

- Auth Workflow
  As this application is internal application it doesnt make sense to open the registration to the public. Instead we should have a workflow where the user is invited to the application and then they can register. This will also allow us to integrate workflow where we can approve the user before they can register.

My Proposed workflow is as follows:

Super Admin creates user only with email and a mail is sent to the user with a link to register with a valid token which is valid for 7 days. The user can then
register and login.

#### Sequence Diagram

[![](https://mermaid.ink/img/pako:eNqFk01ugzAQha8y8rbpBVhUitJWilRlEdQuKjYuDDACj-nYEEVR7l4TSAv5UVkZxt97b8bmoFKboYqUw-8WOcVn0oVokzCEp9HiKaVGs4e4bVCWmSG-rm1w9-5QrgvLpqkp1Z7sDerFaKpjlI5STMb6n8vj09PDqBvBmjvy6MBb2GJBzp_NJgY9MJWMIEbO3AjIaQ-8EVewI18GqQpH0yk1sx0ETuUBuqPV6Zqyk-I4uI31CEJF6cHmME81yDkME9Buz2kplm3r6v2IDuZ9jklzEazCsnIg0wR1n4AYsJe8OZDfVrahFZQLvtEFXk3jXoC4_TLkL-b5asXcOrkZ-YFCOeEc_S9uitQFZGU5JzET5O6AdDgSW6wZ2O4SVgtlMICUhdt96NFE-RINJioKy0xLlaiEj2Gfbr2Nw0moyEuLC9U2mfbnP0FFua5d-Bru7Ke15_fjD9pQItU?type=png)](https://mermaid.live/edit#pako:eNqFk01ugzAQha8y8rbpBVhUitJWilRlEdQuKjYuDDACj-nYEEVR7l4TSAv5UVkZxt97b8bmoFKboYqUw-8WOcVn0oVokzCEp9HiKaVGs4e4bVCWmSG-rm1w9-5QrgvLpqkp1Z7sDerFaKpjlI5STMb6n8vj09PDqBvBmjvy6MBb2GJBzp_NJgY9MJWMIEbO3AjIaQ-8EVewI18GqQpH0yk1sx0ETuUBuqPV6Zqyk-I4uI31CEJF6cHmME81yDkME9Buz2kplm3r6v2IDuZ9jklzEazCsnIg0wR1n4AYsJe8OZDfVrahFZQLvtEFXk3jXoC4_TLkL-b5asXcOrkZ-YFCOeEc_S9uitQFZGU5JzET5O6AdDgSW6wZ2O4SVgtlMICUhdt96NFE-RINJioKy0xLlaiEj2Gfbr2Nw0moyEuLC9U2mfbnP0FFua5d-Bru7Ke15_fjD9pQItU)

- Bulk Import/Edit/Delete/Export

We all know that a persons tenure is for 1 year. So we should have a feature where we can import a list of users and automatically assign them to a position for a 1 year. This will allow us to save lot of time.

My proposed workflow is as follows:

Super Admin can upload a csv file with the following columns

- Name
- Email
- Position
- Department
- Society
  etc..

the csv file will be parsed accordingly and the users will be created and linked to the society via position. Then the application will also send emails to the users with a link to register and login. (This is the same workflow as above, just that we are doing it in bulk)

- Notifications and Reminders

The system should be able to send notifications to users for actions such as event creation, transaction updates, and bill generation.
Proposed workflow:

Have a async service which handles all the notifications. The service will be triggered by the events that happen in the application. The service will then send the notifications to the users.
