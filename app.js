const fs = require('fs');
const cheerio = require("cheerio")
let exec = require('child_process').exec;

// Todo: Set the episode link
let epo_url=""
// Example of epo_url
// let epo_url="https://www.faselplus.com/watch/7236?season_id=72618&episode_id=72620&playback=675bc4c1-fd02-6916-4359-e9cc109599e0"

// Todo: set the path of IDM app, make sure to do duple slash if you using windows
let IDM_Path = ""
// Example of IDM_path
// let IDM_Path = "C:\\Program Files (x86)\\Internet Download Manager\\IDMan.exe"



async function featch_links() {

  if (!epo_url){
    console.log("Please set the link of episode")
    return 0
  }

  let nextUrl = epo_url
  while (true) {
    let obj = ""
    const res = await 

  //  Todo: copy the featch nodejs from network of page in browser and replace the url by varible nextUrl, see the README.md for more detailes
  


    obj = await res.text();
    const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/;
    const scriptTagContent = obj.match(scriptRegex)[1];
    const var_name = get_var(scriptTagContent)
    const regex = "document[_0x00dd('0x3')](decodeURIComponent(escape("+var_name+")));";
    const result =  scriptTagContent.replace(regex,'var plain = '+var_name);
    eval(result);
    // const $ = cheerio.load(plain)
    const $ = cheerio.load(obj)
    const firstMp4Link = $('.qlt-item:first-child a').attr('href');
    nextUrl = "https://www.faselplus.com"+$('.playlist-left a').attr('href');

    if (IDM_Path){

      // Download episode using IDM
      exec(' "'+ IDM_Path +'"  /n /d '+firstMp4Link)

    }
    
    console.log(firstMp4Link)
    console.log(" ")


    // to stop on last epo
    if (!$('.playlist-left a i').hasClass("fa-forward-step")){
      break
    }
  }

}

function get_var(codeSnippet){

  let variableDeclarationRegex = /var\s+(\w+)\s*=/;

  // Match the variable declaration using the regex
  let match = codeSnippet.match(variableDeclarationRegex);

  // Extract the variable name from the match
  let adilbo_HTML_encoder_LTaVariable = match ? match[1] : null;

  // Output the result
  return adilbo_HTML_encoder_LTaVariable
}

featch_links()



