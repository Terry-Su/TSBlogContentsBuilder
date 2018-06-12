import { NAME, MARKED_HTML, RELATIVE_CLIENT_PROPS_URL, PROPS_URL } from '../names';
import { INSERTED_SCRIPTS } from "../configNames"
export default function( {
  [ NAME ]: name,
  [ MARKED_HTML ]: markedHtml,
  [ INSERTED_SCRIPTS ]: insertedScripts,
  [ RELATIVE_CLIENT_PROPS_URL ]: relativeClientPropsUrl
}: any ) {

  let insertedScriptsString = ""
  insertedScripts.map( ( scriptString: string ) => {
    insertedScriptsString = insertedScriptsString + scriptString
  } )

  const GV = {
    [ PROPS_URL ]: relativeClientPropsUrl
  }
  const GVJsonString = JSON.stringify( GV )

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${name}</title>
</head>
<body>
  <div id="markedHtml" style="display: none;">${markedHtml}</div>
  <div id="app"></div>

  
  <script>window.GV=${ GVJsonString }</script>
  ${insertedScriptsString}
</body>
</html>
`
}
