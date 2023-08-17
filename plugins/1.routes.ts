
export default defineNitroPlugin((nitro) => {
     // @ts-ignore "error" is there
    nitro.hooks.hook('request', async (error, {event}) => {
      console.log(`${event.method} Application request:`, error)
    });
    
  })