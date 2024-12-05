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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_04_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDgwLFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTM5LFxuICAgICAgICA5NixcbiAgICAgICAgMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODksXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTExLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyc3FYeUxZeWpsZjlwRHJxRndQUGNvRzBONjlQQlVhMElHWk1tU3N3cUprPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkeWttYWM0c1JxeVRkUnM5dXFqSHhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImVjMDZmMDQyLTg5NWEtNGYwZS04NzRkLWM0ZTY5MGMxNTZjZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDE2MixcbiAgICAgIDg2LFxuICAgICAgNTEsXG4gICAgICA1MixcbiAgICAgIDc5LFxuICAgICAgODYsXG4gICAgICAxOTcsXG4gICAgICAzNixcbiAgICAgIDEwMyxcbiAgICAgIDExLFxuICAgICAgMTczLFxuICAgICAgMTksXG4gICAgICA0MCxcbiAgICAgIDk0LFxuICAgICAgMjIxLFxuICAgICAgNjgsXG4gICAgICAxNTAsXG4gICAgICA5NSxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDIxNSxcbiAgICAgIDI0NixcbiAgICAgIDE5OCxcbiAgICAgIDExOCxcbiAgICAgIDk2LFxuICAgICAgMTY0LFxuICAgICAgOSxcbiAgICAgIDE3NSxcbiAgICAgIDIzNSxcbiAgICAgIDExOCxcbiAgICAgIDUyLFxuICAgICAgMTU3LFxuICAgICAgMTY5LFxuICAgICAgMjMyLFxuICAgICAgMjA5LFxuICAgICAgMTg5LFxuICAgICAgODYsXG4gICAgICAxNDEsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjZSOUYzNEtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE1MTY3OTc5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOYW5heWFra2FyYVwiLFxuICAgIFwibGlkXCI6IFwiMTMzNjgxMDA4MDgzMDM2OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEswNE9NR0VPeUV4Ym9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4L2srbXpFWE56YnJ5WWg0WVNPbytvVEZIdDB6MVBnUlpudUxISUZCdkZvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdaY200Y2U3aGFxQmtJTlhGMlF6T0hqSlZmNHdTU25yQ0o5dGYyQnpNdFZPVjBCU0dLWFFMS1hxc3VWS2NBUE5xY09seEpqYmx6RlpQVVUrN0dxUUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxGbEF6RnlPVkE0TDBOUnJDdHFWSzJhMm9VaXJCWUttRWlTcXVwNGN3QXY3RE02Tmc2VHpKQmg5U3hKUWJ4Y1BSVEIydWpPQXpzeE42YjYvZkVrTmdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzE1MTY3OTc5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzM3ODY3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5rQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmtBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL01zM28vZVNDUEwxSDg2ODl0QzB6eW02UFBDVSttSWwvSURTRWMxZXRZYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODE5ODEwNDE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMzMDc3NTY5MDdcIn0iCn0="  // PUT your SESSION_ID 


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
