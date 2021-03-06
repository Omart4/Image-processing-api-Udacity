# Image Processing Api Udacity

## Intro

This api is used to process images entered by the user and resizes them based on user input returning a resized image in a folder

## Main Packages used:

### 1.ExpressJS and its types(for firing up a server)
`npm i express`
`npm i --save-dev @types/express`

### 2.Jasmine and its types(for testing)
`npm i jasmine`
`npm i --save-dev @types/jasmine`
`npm i jasmine-spec-reporter`

### 3.Nodemon and its types(for quick reload of the server)
`npm i nodemon`
`npm i --save-dev @types/nodemon`

### 4.Prettier(for refactoring code and making it look nice)
`npm i prettier`
`npm i --save-dev @types/prettier`

### 5.Eslint 
`npm i --save-dev eslint`
`npm i --save-dev eslint-config-prettier`
`npm i --save-dev eslint-plugin-prettier`

### 6.Sharp and its types (for actually processing the images)
`npm i sharp`
`npm i --save-dev @types/sharp`

### 7.Supertest
`npm i supertest`
`npm i --save-dev @types/supertest`

### 8. Typescript
`npm i -g typescript`

## Commands 

### 1. To start the server:
`npm run start`

### 2. To compile typescript code into javascript:
`npm run build`

### 3. To run tests:
`npm run jasmine`

### 4. To compile typescript and run tests at the same time:
`npm run test`

### 5. To run Prettier:
`npm run prettier`

### 6. To run Eslint:
`npm run lint`

## Notes

### Server is running on port 8000 and the url would look like this `http://localhost:8000/`
### To process an image your entered url should look like `http://localhost:8000/api/images?file={your_file_name}&width={desired_width}&height={desired_height}`
