import { Component, h } from "nano-jsx";

export class Checkbox extends Component {
    checked = true
  
    toggle(_e: Event) {
        _e.preventDefault()
      this.checked = !this.checked
      this.update()
    }

    
    render() {
        const Text = this.checked ? <p>is checked</p> : null
  
      return (
        <div class='bg-blue flex flex-center  bg-blue-50'>
          <input id="checkbox" type="checkbox" checked={this.checked || undefined} onClick={this.toggle.bind(this)} />
          <Text />
          <div>hello</div>
        </div>
      )
    }
  }
  