import { withStyles } from 'nano-jsx';
import * as fs from 'node:fs'
export default function useStyles(html?: string){
    const styles = fs.readFileSync(process.cwd() + '/generatedStyles.css', {encoding: 'utf-8'})
    return withStyles(styles)(html)
}