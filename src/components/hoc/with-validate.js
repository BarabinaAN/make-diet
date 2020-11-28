import React, { Component } from 'react'
import { checkValidate } from '../../utils'

const withValidate = (View, requiredFields = {}) => {
   return class extends Component {
      state = {
         fields: requiredFields,
         errors: requiredFields,
      }

      componentDidMount() {}

      setValue = (name, value) => {
         this.setState((state) => {
            return {
               fields: {
                  ...state.fields,
                  [name]: value
               }
            }
         })
      }
      
      setError = (key, msg = '') => {
         this.setState((state) => {
            return {
               errors: {
                  ...state.errors,
                  [key]: msg
               }
            }
         })
      }

      onChangeRadio = (e) => {
         const { name, value } = e.target
         this.setValue(name, value)
      }

      onSubmit = (e) => {
         return checkValidate(this.state, this.setError)
      }

      render() {
         return <View {...this.state} {...this.props} onChangeRadio={this.onChangeRadio} onSubmit={this.onSubmit} />
      }
   }
}

export default withValidate