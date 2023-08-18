export default defineEventHandler( async ( event ) => {
  console.log( event.path );

  if ( event.path === '/islands.js' )
  {
    return ( await import( '../islands/index.js' ) );
  }
    // const app = html
    return 'hi'
  })