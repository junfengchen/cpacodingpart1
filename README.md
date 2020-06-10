# Project Name: CPA Coding Part 1

## Design decisions:
    Adopt a test driven approach. Creating classes / modules based on the emerging requirements and reengineering the code as needed.
    Functional programming is adopted in individual modules to make the code simpler and concise.
    Handle data retrieval and data conversion in service, so components are only responsible for rendering.
	Improve user experience by adding loading image. Error message will be displayed when API loading fails.
	Strictly follow DIY (don't repeat yourself) principal.
	Some OOP design patterns are adopted.

## Dependencies:
    'Tslint' to validate against coding standards
    'Typescript' to improve coding efficiency
    'Karma / Jasmine' as testing framework

## Code Structure:
```
    apiclient.service.*
    -   the service to load data from the backend API and deal with data transformation
	
    app.component.*
    -   core component to bootstrap the page
    
    coursereport.component.*
    -   subscribe the data from apiclient service and display in well formatted manner

```

## Get started

Open the project, and run the following command in the IDE or CLI console:
1. install the required components
```
    npm install
```

2. run the test cases
```
    ng test
```

3. rum the application 
Please insert the commands into data\test.cmd, and then run
```
    ng serve -o
```

4. lint the code
```
    ng lint
```

## Thoughouts

If more time is given, I can expand the code to cover features like state managment and API authentiation.