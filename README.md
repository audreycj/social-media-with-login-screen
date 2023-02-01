# social-media-with-login-screen
live website: https://audreycj.github.io/social-media-with-login-screen/

This was a formative assessment for our IT103P (Web Programming) course during my 2nd year as a Computer Science student.
We were given the following instructions:

-------

![image](https://user-images.githubusercontent.com/68633976/215748916-2fbdec24-0a7e-4499-85d0-5a521b1f3bb1.png)

Required Features: 
- A Newsfeed that I can scroll through. (At least 10 posts)
- A Header
- A way for me to react to a post (Like button, Favorite, it's up to you.)
- A number beside the React button that will show how many times that post has been liked.
- If I click the react button, the number must increase by 1. If I click it again it will increase by 1 again, and so on.
- Login page must be the first page that I am in.
- Must take me to the 'newsfeed' page if I enter the correct credentials. 
- The only accepted credentials should be:
- Username = 'admin'
- Password = '1234';

Notes: 
- Do not explicitly copy any existing social media site.
- The branding, the design, and the food items are totally up to you.
- Make it unique. :) 

Tips:
- Start out with the login page first. I was creating a login form in the last of my lectures. I suggest rewatching it if you didn't fully grasp it the first time.
- On your login button simply add an onclick() function that will check if the values inside the text fields match the credentials I mentioned awhile ago.
- The designing part of the actual social media page should be pretty easy. The React button must be present on each post. Its functionality is basically just an incrementing counter. Each click, plus 1. Use the onclick() property on that button and attach a function.
