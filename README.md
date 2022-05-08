# 2022_angular_chuck_noris_test_project

Application for testing NGRX session managment in a material angular SPA. 

## Building

you can build the compiled application using the following commands at the application root directory

```batch
npm install
npx ng build
```

## Testing locally

you should be able to us `ng serve` to run the application locally

```batch
npm install
npm run start
```

## Docker image building & running

from the application root directory run the following commands

```batch
docker build . -t local/joke-application

# after completed
docker run -it -p 81:80 local/joke-application
```

you should now be able to access the webpage through any browser at <http://localhost:81>

## Testing

there are a few unit tests written for the application, they can be run with the following command

```batch
npm run test
```

_Note:_ the application is build to be developed within a container - so the chromium browser was setup
for the unit tests, to run locally with the chrome browser, you may need to make a change to the `karma.conf.js` file

comment out the following

```json
  {//...
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--headless',
          '--remote-debugging-port=9222'
        ]
      }
    },
  //...
  }
```

and change the browsers back to 'chrome' `browsers: ['ChromeHeadless'],` to `browsers: ['Chrome'],`


## TODO

- [x] Use Angular Material UI
- [x] Chuck Noris Joke generation from API
- [x] allow user to keep joke
  - [x] move this to ngrx
- [x] allow user to reject joke
- [x] show list of jokes, with DATE & Time saved. 
- [x] handle api call errors.
- [x] tests
- [x] docker buildfile with nginx server
- [x] run instructions


