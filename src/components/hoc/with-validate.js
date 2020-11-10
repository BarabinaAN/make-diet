import React, { Component } from 'react'
import { calculate, checkValidate } from '../../utils'

const withValidate = (View) => {
   return class extends Component {
      state = {
         fields: {
            gender: '',
            age: '',
            growth: '',
            weight: '',
            activity: '',
         },
         errors: {
            gender: '',
            age: '',
            growth: '',
            weight: '',
            activity: '',
         },
         result: null
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
         e.preventDefault();
         if (!checkValidate(this.state, this.setError)) {
            return
         }

         this.setState((state) => ({ result: calculate(state) }) )
      }

      render() {
         return <View {...this.state} onChangeRadio={this.onChangeRadio} onSubmit={this.onSubmit} />
      }
   }
}

export default withValidate