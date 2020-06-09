# Integral Dashboard

## Project Running 🍩
```
index.html
```

## Warning of when you build this project 🍙
change "index.html" <br />
—————————————————————————— <br />
copy all content in "./css/app.?????.css" <br />
🌕 to 🌑 <br />
index.html <br />
—————————————————————————— <br />
```
<head>
 -  | <link href=css/app.????.css rel=preload as=style>
 -  | <link href=css/app.????.css rel=preload>
 +  |   <style type="text/css">
 +  |       /* "./css/app.????.css" (content) */  ->   remember change-error background-image:url(./img/background.?????.png)
 +  |   </style>
</head>
```

## API Change 🤣
🌀 not Change in Project Dist <br />
🌙 Change in Project Dir
```
Project Dir
integration/src/api/global.js

---  globa.js  ---
url: "get data from address" --- (example "http://heinrich.goho.co")
port: "get data from address port" --- (example 80) -> "http://heinrich.goho.co:80"
path: "get data from address path" --- (example /integration/) -> "http://heinrich.goho.co:80/integration/"
file: "get data from address file" --- (example data.php) -> "http://heinrich.goho.co:80/integration/data.php"
```

## Data Layout 🌈
🌟🌟🌟 Please follow the Data Rules if you want this project can be run 🌟🌟🌟 <br />
Please follow this Layout 👇👇👇
```
————  Object  ————
allIntegralList: [
    {
      avatarPath: String("headerLogo"),
      integralAll: Number(2899),
      integralByDay: Number(99),
      integralHistoryTop: Number(100),
      mvpCount: Number(2),
      name: String("Heinrich"),
      sort: Number(1)
    }, ...
]
errorTaskList: [
    {
      exceptionMessage: String("error cause"),
      projectName: String("Project One"),
      taskMember: Array( [String("Project Menber One"), String("Project Menber Two")] ),
      taskName: String("Task-Name of Project")
    }, ...
]
notifyList: [
    "Notify One", "Notify Two"
]
```

## Other matters
#### — notifyList
If you don't have Notification in data, NotifyCard will be change to Title
```
data:  notifyList: []  ↓↓↓
——————————————————————————————————————————
|           Integral Dashboard           |
|                                        |
|                                        |
|                                        |
|                                        |
|                                        |
——————————————————————————————————————————
```
#### — allIntegralList
3 situations: <br />
1️⃣ &nbsp; 0 integral  <br>
2️⃣ &nbsp; 1-6 integral(s)  <br>
3️⃣ &nbsp; 7 or more then 7 integrals  <br>
```
                0 integral
——————————————————————————————————————————
|                                        |
|    _______                             |
|   |       |                            |
|   |       |                            |
|   |       |  <-  no somethings         |
|   |       |                            |
|   |_______|                            |
|                                        |
——————————————————————————————————————————
```
```
             1-6 integral(s)
——————————————————————————————————————————
|                                        |
|    _______                             |
|   |口·· 🥇|                            |
|   |口·· 🥇|                            |
|   |口·· 🥇| <-  can't not auto scroll  |
|   |口··   |                            |
|   |_______|                            |
|                                        |
——————————————————————————————————————————
```
```
        7 or more then 7 integrals
——————————————————————————————————————————
|                                        |
|    _______                             |
|   |口·· 🥇|                            |
|   |口·· 🥇|                            |
|   |口·· 🥇|      <-  auto scroll       |
|   |口·· 🥇|                            |
|   |口·· 🥇|                            |
|   |_______|                            |
|                                        |
——————————————————————————————————————————
```

#### — errorTaskList
3 situations: <br />
1️⃣ &nbsp; 0 errorTask  <br>
2️⃣ &nbsp; 1-4 errorTask(s)  <br>
3️⃣ &nbsp; 5 or more then 5 errorTasks  <br>
```
                0 errorTask
——————————————————————————————————————————
|                                        |
|                            _________   |
|                           |        |   |
|                           |        |   |
|                           |        |   |
|    no somethings   ->     |        |   |
|                           |        |   |
|                           |        |   |
|                           |        |   |
|                           |________|   |
|                                        |
——————————————————————————————————————————
```
```
             1-4 errorTask(s)
——————————————————————————————————————————
|                                        |
|                            _________   |
|                           | xxx ...|   |
|                           | ……………… |   |
|                           | xxx ...|   |
|  can't not auto scroll -> | ……………… |   |
|                           | xxx ...|   |
|                           | ……………… |   |
|                           |        |   |
|                           |________|   |
|                                        |
——————————————————————————————————————————
```
```
       5 or more then 5 errorTasks
——————————————————————————————————————————
|                                        |
|                            _________   |
|                           | xxx ...|   |
|                           | ……………… |   |
|                           | xxx ...|   |
|      auto scroll    ->    | ……………… |   |
|                           | xxx ...|   |
|                           | ……………… |   |
|                           | xxx ...|   |
|                           |________|   |
|                                        |
——————————————————————————————————————————
```

## Github URL
https://github.com/dreamrunner1996/integration/releases
