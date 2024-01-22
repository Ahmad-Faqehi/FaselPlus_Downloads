# Download All Episodes of Series Tv
Downloding multiple episodes of your favorite series could be hard for lazy guys >.< <br>
This script woking on [Fasel Plus]('https://faselplus.com/') site to featch all episodes and download it using [IDM]('https://www.internetdownloadmanager.com/'). <br>
The project build for fun :)


## Requires
* []() Node js
* []() Setup [IDM]('https://www.internetdownloadmanager.com/') and actitve command [CLI]('https://www.internetdownloadmanager.com/support/command_line.html') 
* []() Account in [Fasel Plus]('https://faselplus.com/')

## Setup Project 🔧

Clone the project to your machine:
```shell
git clone https://github.com/Ahmad-Faqehi/FaselPlus_Downloads.git
cd FaselPlus_Downloads/
```
Install npm packages:
```shell
npm install
```

## Configure the Project ⚙️
You will need to do some steps to be able use the script, <br>
- Visit the Fasle Plus website and login to your account. <br>
- Then do right-click and select inspect then from network copy the first option as Node.js featch. <br>
- Then paste the featch in <b>app.js</b> under <i>// Todo: copy the featch nodejs from network...</i> <br>
- Finaly, replace the link in featch by varible nextUrl<br>

![How to copy](https://media.giphy.com/media/VSZZLTLP59AQ8CRGxI/giphy.gif)


## Configure Internet Download Manager (IDM) 🌎
The idman command line is for internet download manager, will be used to download the episodes from link that featched.
Youl will need to copy the full path of IDMan.exe which can be found usually in windows path:
```
C:\\Program Files (x86)\\Internet Download Manager\\IDMan.exe
```
Copy the path and put in <b>app.js</b> in variable <b>IDM_Path</b>. <br>
Note: Make sure to put double backslash if you are using windows.

## Run the Project 🚀
Open Fasel Plus and open episode that you want start download from it, then copy the link of that episode and put it in <b>app.js</b> in variable <b>epo_url</b>, below example of episode link.

```
https://www.faselplus.com/watch/7236?season_id=72618&episode_id=72620&playback=675bc4c1-fd02-6916-4359-e9cc109599e0
```

Now you are ready, to start the script:
```shell
node app.js
```

Make sure you have enough storge, otherwise your disk will get full :)  