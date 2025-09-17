// Step by step procedure to work with excel

// 1. Install xlsx library - npm install xlsx (npm install --save-dev xlsx)
// 2. Create and store the excel file inside TestData directory
// 3. Create a reusabe function which helps us in terms reading the excel file
// 4. Convert the excel data into JSON format and return that json format data from the function
// 5. Call the function inside the test file to use the data as a part DD. We have to store it inside a variable.[....]
// 6. Looping concept to get the data from array one by one inside the test case.



// Steps to work with .env files

// 1. We have to install dotenv package - npm install dotenv
// dotenv package is used to load environment variables from a .env file into process.env(Global Object in node.js)
// 2. Create .env (data.env.qa) file in your project inside TestData
// 3. Inside the playwright configuration file we can call the dotenv.config({path: "path of the .env"}) loads the environment variable from the .env into process.env
// 4. (Optional Step) create an ENV object to access the environment variable in a structure
// 5. Import the ENV object in a test files where you want to use the environment variables
// 6. We can access the environment varaible using ENV object like ENV.baseURL, ENV.username
