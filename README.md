# Task Tracker
*****
### Author : Christopher Chinia 25th June 2022
****
## Project Description
Task tracker is a simple application that lets a user record their daily activities that they intend to do. Keeping records enables the user to refer without constant worry of fogetting.

## SCREENSHOTS
![Home-page SCREENSHOTS](./Assets/images/Screenshot%20from%202022-07-08%2021-56-34.png)

![Full home-page SCREENSHOTS](./Assets/images/Screenshot%20from%202022-07-08%2021-56-40.png)


********
## SetUp Instruction
Run this command to get the backend started:

```sh
json-server --watch db.json
```

**Make sure to run this command exactly as written**, otherwise your server will
not return data in the correct format. Test your server by visiting this route
in the browser:

[http://localhost:3000/data/1](http://localhost:3000/data/1)

Then, open the `index.html` file on your browser to run the application.


### Requirements
* [HTML](lang Url)
* Text editor eg [Visual Studio Code](https://code.visualstudio.com/download)


### Getting Files
* Fork the repo [LINK.](https://github.com/ChristopherChinia/Task-Tracker)
- Create a new branch in your terminal (git checkout -b improve-feature)
- Install the prerequisites
- Make appropriate changes in file(s)
- Run the server to see the changes
- Add the changes and commit them (git commit -am "Improve App")
- Push to the branch (git push origin improve-app)
- Create a Pull request
* Open the folder location on terminal and use the following command to run app:

## How To Run It
Run this command to get the backend started:

```sh
json-server --watch db.json
```
Make sure to run this command exactly as written,
otherwise your server will
not return data in the correct format. Test your server by visiting this route
in the browser:

[http://localhost:3000/data/1](http://localhost:3000/data/1)

Then, open the `index.html` file on your browser to run the application.

As a user, You can:
1. See the image received from the server, including its title,description, likes and
   price when the page loads. You will need to make a GET request to the
   following endpoint to retrieve the image data, along with its associated
   description:

      ```txt
   GET /data

   Example Response:
   {
        "id": 1,
        "text": "Working on Labs",
        "day": "Jul 4 at 5:00pm"
      },
      {
        "id": 3,
        "text": "Complete tasks on canvas",
        "day": "Jul 4 at 5:00pm"
      },
      {
        "text": "Cooking Lunch",
        "day": "Jul 8 at 12:30pm",
        "id": 4
      }
   ```
*****
## Live Link
Or you can access the web application directly via this [LINK.]() 
*****

## Technologies Used
1. HTML
2. CSS
3. JavaScript
4. JSON local API


*****
## Contact Information
* Email : christopher.chinia@student.moringaschool.com
*****
## [License](LICENSE)
MIT License
Copyright (c) 2022 Christopher Chinia