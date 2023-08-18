// import { Comments } from '../components/comments.tsx';
import Nano, { Component, Helmet, h, withStyles } from 'nano-jsx';
// import { Comments } from '../components/app.tsx';
import { RenderHandler } from 'nitropack';
import { Comments } from '../components/comments.tsx';

const App = () => {
  return (
    <div>
      <Helmet>
        <html lang="en" amp />
        {/* <body class="root" /> */}
        <body class="main" id="id" />
        <title>Nano JSX Helmet SSR</title>
        <meta name="description" content="Nano-JSX application" />
        <script src="/index.js"></script>
      </Helmet>
      <Comments />
    </div>
  );
};
const app = Nano.renderSSR( <App />);
const { body, head, footer, attributes } = Helmet.SSR( app );

const html = `
<!DOCTYPE html>
<html ${ attributes.html.toString() }>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    ${ head.join( '\n' ) }

  </head>
  <body ${ attributes.body.toString() }>
    ${ body }
  </body>
</html>
`;




export default defineEventHandler( (event) => {
  const root = `${process.cwd()}/islands`

  // const app = html
  return html;
} );