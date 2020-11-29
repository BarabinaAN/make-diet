import React, { Component } from 'react'
import { checkValidate } from '../../utils'

const withValidate = (View, requiredFields = {}) => {
   return class extends Component {
      state = {
         fields: requiredFields,
         errors: requiredFields,
      }

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
      
      onChangeField= (e) => {
         const { name, value } = e.target
         this.setValue(name, value)
      }

      // onCheckValidate, заменить на свойство - isValidate
      onCheckValidate = () => {
         return checkValidate(this.state, this.setError)
      }

      render() {
         return <View {...this.state} {...this.props} onChangeField={this.onChangeField} onCheckValidate={this.onCheckValidate} />
      }
   }
}

export default withValidate