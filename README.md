# Lab 8 - Starter
1) In your own words: Where would you fit your automated tests in your Recipe project development pipeline?
   Within a Github Action whenever a pull request is created
2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
    No
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   No because the message feature usually involves multiple functions, for example converting the message to JSON, contacting and sending the message to the database, then on the other end checking to make sure the right JSON was recieved by the database as well as the recieving user. Since multiple functions are involved in making the message feature work, it is not smart to unit test the entire feature.
4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   Yes, the max message length feature is only one function and therefore it is easier to debug on a small scale. Hence unit testing is the best kind of testing practice that can be implemented here.