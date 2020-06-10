# Project Name: CPA Coding Part 1

## Design decisions:
    Adopt a test driven approach. Creating classes / modules based on the emerging requirements and re-engineering the code as needed.
    Functional programming is adopted in individual modules to make the code simpler and concise.
    Handle data retrieval and data conversion in service, so components are only responsible for rendering.
	Improve user experience by adding loading image. Error message will be displayed when API loading fails.
	Strictly follow DIY (don't repeat yourself) principal.
	Some OOP design patterns are adopted.
    Good coverage for service and UI component test cases.

## Dependencies:
    'Tslint' to validate against coding standards
    'Typescript' to improve coding efficiency
    'Karma / Jasmine' as testing framework

## Code Structure:

    apiclient.service.*
    -   the service to load data from the backend API and deal with data transformation
	
    app.component.*
    -   core component to bootstrap the page
    
    coursereport.component.*
    -   subscribe the data from apiclient service and display in well formatted manner



## Get started

1. create a folder in your local computer and clone the project:
```
    git clone https://github.com/junfengchen/cpacodingpart1.git
```


2. Open the project from IDE or run the following commands in the CLI console. 

To install the required components
```
    npm install
```

To run the test cases
```
    ng test
```

To run the application 
```
    ng serve -o
```

To lint the code
```
    ng lint
```

## Thoughts

If more time is given, I can expand the code to cover features like state management and API authentication.