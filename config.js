const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_22_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3NixcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICA2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMixcbiAgICAgICAgODQsXG4gICAgICAgIDM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDksXG4gICAgICAgIDY4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDczLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwLFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR1BiM0xua2t3TjBZVStFVmNpU3ZtWVZhWUJUTHp0elBOQXE2WThaOXd2UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieU5qamFZRHBTdnl2UThYVXBRd2NTZ1wiLFxuICBcInBob25lSWRcIjogXCJjYmU3MWIzOC05MWY0LTQyYWEtYTJkNS1hNzEwNTFlNDU0Y2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICAxNzMsXG4gICAgICAyMTYsXG4gICAgICAxNSxcbiAgICAgIDIxNyxcbiAgICAgIDk4LFxuICAgICAgMyxcbiAgICAgIDEwNixcbiAgICAgIDUwLFxuICAgICAgMTcxLFxuICAgICAgMTgsXG4gICAgICAyNDAsXG4gICAgICAxNzQsXG4gICAgICA2MCxcbiAgICAgIDk4LFxuICAgICAgMTcwLFxuICAgICAgMjQ1LFxuICAgICAgMTMsXG4gICAgICAxMDgsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgNCxcbiAgICAgIDIzNixcbiAgICAgIDg3LFxuICAgICAgMTIwLFxuICAgICAgMTE0LFxuICAgICAgMTI4LFxuICAgICAgNjksXG4gICAgICAxNDEsXG4gICAgICAxNTcsXG4gICAgICAxMCxcbiAgICAgIDE5MSxcbiAgICAgIDg1LFxuICAgICAgMTcwLFxuICAgICAgMTk1LFxuICAgICAgOTcsXG4gICAgICA2MixcbiAgICAgIDIwNyxcbiAgICAgIDE0NyxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkRNSEVZTlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE1MTY3OTc5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOYW5heWFra2FyYVwiLFxuICAgIFwibGlkXCI6IFwiMTMzNjgxMDA4MDgzMDM2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEswNE9NR0VPUGF3TG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4L2srbXpFWE56YnJ5WWg0WVNPbytvVEZIdDB6MVBnUlpudUxISUZCdkZvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNTVWZFU3lBU3l4c2w3c1NpaTZHdEsyVldGM3k3Q1lUb3ZUOHNNUUFvemRneHNBK2k3djFBRWpHdGdyWm0ycUV0MWVxM21zRS9nNmN2dHRDazZBN0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5malQ3T0lMcndDckVFWVpBN2tpTEpvM3JxSUJNOXFCQThtUy9CUmhwTjQ3b1hrVU05bFpFRndOcXc4SFVEYVB6Qk4yNkVzNXBzRCsyeHlQZUdEWGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzE1MTY3OTc5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzMwNzc1MCxcbiAgXCJteUF"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
