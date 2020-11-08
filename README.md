# Code-Pieces-Part-I
**This app uses a Nodejs [API](https://github.com/2nd-Level/CODE-PIECES-API) with authentication built in**
**Code Pieces App: https://code-pieces.vercel.app/**
##### Login Credentials
```
username = user
password = user
```
_______

**This is a small react application that simply allows you to manage post, called code pieces, about coding. This application has the ability to preform basic CRUD oprations on the post.**
### Inside The Code
- React Router
    - `withRouter()`
    - `Route`
    - `Switch`
    - `Redirect`: to redirect users back to home page when a private route is click and there is no token
    - Private routes able to use the render and component props
- React Router DOM
     - `Link`
     - `BrowserRouter`
- Hooks / Custom Hooks
- Axios
- Node Sass
- FontAwesome
_____
### Users Authentication Functionality
- [ ] Register
- [x] Login
    - `username = user, password = user`
- [x] Logout
____
<!-- ### Files and Folders
- assests
- components
- hooks
- utils -->

#### Pages
- [x] **Login/Register**
    - [x] styling
    - [x] Login component
    - [x] Register component

  -------------   
- [x] **UserHome**
    - [ ] styling
  ------------- 
- [x] **Pieces** 
    - [x] styling
    - [x] Pieces Details Component
        - Page that displays piece details
        - [x] Like Piece Component
        - [x] Delete Piece Component
        - [ ] Edit Piece Component
        - [ ] Piece Comments Component
  ------------- 

- [x] **Individual Piece**
    - [x] Like Piece Component
    - [x] Delete Piece Component
    - [ ] Edit Piece Component
  ------------- 
- [x] **Add Piece**
    - [ ] styling
____

### Logic
- [ ] Authentication
- [ ] User Home 
- [ ] Pieces
    -  The Pieces
    - [ ] Piece
        - Each Piece
    - [ ] Add Piece
        - Adding a piece
        - [x] User has the ability to add a code piece
    - [ ] Delete Piece
         - Deleting a piece
    - [x] Like Piece
        - Use props to display the correct number of likes coming from data, when clicked the props will be increased by one and the like button color changes, the user should only be able to like the post once if the like button is clicked again it decrease the likes by one and the like button color changes back.
    - [ ] Edit Piece
        - Changing a piece
    - [ ] Comments
        -  The Comments
    - [ ] Comment
        - Each Comment
    - [ ] Add Comment
        - [ ] Adding a omment
    - [ ] Delete Comment
         - Deleting a comment
    - [ ] Like Comment
        - Liking a comment
    - [ ] Edit Comment
        - Changing acomment

### Pieces Logic
- [x] View Pieces Logic
- [x] Create Piece Logic
- [x] Delete Piece Logic
- [ ] Edit Piece Logic

### Comments Logic
- [x] View Comments Logic
- [ ] Create Comments Logic
- [ ] Delete Comments Logic
- [ ] Edit Comments Logic



<!-- ### Branches
- [part1](https://github.com/SR-Portfolio-Projects/Code-Pieces-Part-I/tree/part1)
    - uses classes to manage state
- [part1-refactoring](https://github.com/SR-Portfolio-Projects/Code-Pieces-Part-I/tree/part1-refactoring) 
    - refactored to use hooks to manage state
    - added ability to like pieces
- [UI]()
    - React Router -->


### The Code Pieces

- [x] User has the ability to delete a piece
- [ ] User has the ability to update a piece

### The Comments
- [ ] User has ability to add comments
- [ ] User has ability to delete comments
- [ ] User has ability to edit comments
- [x] User has ability to see comments



**Come Back Too**
- [ ] Closing the comment after they are opened [This](https://github.com/SR-Portfolio-Projects/React-Hamburger-Menu)
- [x] Add protected Routes
- [ ] Style Add Piece Page
- [ ] Work on comment section
- [ ] Work on User Home page

**Bugs**
- [ ] App tries to get pieces before login
- [ ] Page needs to be refreshed to see
    - [ ] Logout link after login and after logout to make it go away
    - [ ] Pieces after login and after logout to make them go away





