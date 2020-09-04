import React, {Component} from 'react'
import Snippet from '../spinner'
import ErrorIndicator from '../error-indicator'


const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    }

    componentDidMount() {
      this.update()
    }

    update = () => {
      this.setState({
        data: this.props.service.getTest(),
        loading: false
      })
    } 

    render() {
      const {data, loading, error} = this.state
      const fail = error && <ErrorIndicator />
      const load = loading && <Snippet />
      const content = data && <View data={data}/>
      return <>
        {fail}
        {load}
        {content}
      </>
    }
  }
}

export default withData