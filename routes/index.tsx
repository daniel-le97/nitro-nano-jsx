import Nano, { Component, Helmet, h, withStyles } from 'nano-jsx';
import { Checkbox } from '../components/app.tsx';

const App = () => {
  return useStyles(
    <div>
      <Helmet>
        <html lang="en" amp />
        {/* <body class="root" /> */}
        <body class="main" id="id" />
        <title>Nano JSX Helmet SSR</title>
        <meta name="description" content="Nano-JSX application" />
      </Helmet>
      <Checkbox />
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

export default defineEventHandler( () => {
  // const app = html
  return html;
} );