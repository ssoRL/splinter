# Splinter

This is a React library used to dynamically create subcomponents in a user interface. There are bars that can be dragged
to resize the inner windows, or double clicked to create new windows. To try this library, fork this project, then
to set it up:
+ Install npm
+ Install a couple global libraries that it depends on:

```npm install -g tsc```

```npm install -g http-server```

+ From the root of this project, install dependencies with:

```npm install```

+ Compile the typescript to javascript with:

```tsc -p ts```

+ And finally start the http server with:
```http-server```

The command prompt will tell you the url to look at to see this running on your local machine.

As of now, it only supports splitting horizontally. The next feature to be added will be vertical splitting, or unit tests
depending upon what seems more important next week.
