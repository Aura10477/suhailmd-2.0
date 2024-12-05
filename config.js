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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_31_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMixcbiAgICAgICAgNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc3LFxuICAgICAgICA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICA5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxLFxuICAgICAgICA5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFSE1qamhFc0VkWjlNdmJUTEwyaTBIRFQwaTRaN2I0UGpJVmdQTk8wemd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQzNzQyNzAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RDIwOTVFNzE5MTVBQzVEODZBNkQxMzYxMzUzNTBBQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMzODAzMTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0Mzc0MjcwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUQ3MDVFMTI5Qjg1NkE1RUU3NjdGOTc0RUFCMzM3QzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMzgwMzEzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDM3NDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFERTE2RTUyNjFBNTRDMEI0RjQ5NzQ2QjQyMTVEQUNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzM4MDMxNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQzNzQyNzAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RjBFRTQ4MTk5MTc2NTQ0ODgwNzRBODFCMUNGNjBFRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMzODAzMTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZUdsa3c1RUNRTGlIUlp6bzJpaTFRZ1wiLFxuICBcInBob25lSWRcIjogXCI5ZjA0Y2NlMi1hNmYzLTQ4YzEtYjRhMS1hZDJkMDFmMzllOGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgNjEsXG4gICAgICA4MSxcbiAgICAgIDExMSxcbiAgICAgIDI1MyxcbiAgICAgIDE0MyxcbiAgICAgIDU4LFxuICAgICAgMTE0LFxuICAgICAgMTk2LFxuICAgICAgMjE1LFxuICAgICAgMTQ0LFxuICAgICAgNDYsXG4gICAgICAxODcsXG4gICAgICAzNyxcbiAgICAgIDMwLFxuICAgICAgMTMzLFxuICAgICAgMTI4LFxuICAgICAgMjI5LFxuICAgICAgNzQsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDIxOSxcbiAgICAgIDEyMixcbiAgICAgIDYzLFxuICAgICAgMjU0LFxuICAgICAgMTEwLFxuICAgICAgMTk2LFxuICAgICAgMTQ0LFxuICAgICAgMjUzLFxuICAgICAgNDgsXG4gICAgICA3MyxcbiAgICAgIDE1OCxcbiAgICAgIDM4LFxuICAgICAgMTIzLFxuICAgICAgNTEsXG4gICAgICA1MSxcbiAgICAgIDE0OSxcbiAgICAgIDc3LFxuICAgICAgNSxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWOFQ1RFlUSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDM3NDI3MDA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTY5NjM4MTkyMTcxNTA6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJJJ20g4oin8J2UsuGWh+KIp1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lIbTd1UURFTk9SeGJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSE5XUGJFckhiY096TTdYMVBERk1pVDdIMjJWZUY4d0ZkS09LaDkxc0pTWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0WmFWZzB1NUhuQ3VPaXllckE3dmVPWEVYY3Y3T1VMZ2g0ZHYwZVpNYnF0bkZhRER3ak1tL0Vpd0N5cE1BSzUrNEFoRFlTRGloZWhLdUhuYzl4TTFEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOVW9NOXBsV1FzdERnWEszL0c5anhKUUMvdVd1ZmZXS1pROEF0NGI2RWRjNmNwY0I5UXBsSVgrUStqS2ptZk5QN1VjaWFXbzhXaHorQktXd25OODdDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0Mzc0MjcwMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMzODAzMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOeU1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU55TS5qc29uIjogIntcImtleURhdGFcIjpcIk9jaU9oQXRGdWFFSGQ2UDJ1cUhHTUpQcVZ3Y1pUb1o3SkhtQkhGVlNNZFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxNjgzNjg2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMzgwMzEwOTA2XCJ9Igp9"  // PUT your SESSION_ID 


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
