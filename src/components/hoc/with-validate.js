import React, { Component } from 'react'
import { checkValidate } from '../../utils'

const withValidate = (View, fieldList = []) => {
   return class extends Component {
      state = {
         fields: null,
         errors: null,
      }

      componentDidMount(){
         this.createFields()

         // реализовать функцию, которая устанавливает значение по умолчанию
      }

      createFields = () => {
         const requiredFields = {};

         fieldList.forEach(({ list }) => {
            if (!list.length) { return }

            list.forEach(({ name, isRequeried }) => {
               if (isRequeried) {
                  return requiredFields[name] = ''
               }
            })
         })

         // init fields on state
         this.setState({
            fields: requiredFields,
            errors: requiredFields,
         })
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