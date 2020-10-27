import React, { Component } from 'react'

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
         }
      }

      componentDidMount() {
         const [...inputs] = document.querySelectorAll('input')
         const radio = inputs.filter(el => el.getAttribute('type') === 'radio')
         // this.setDefaultRadio(radio, 'gender')
         // this.setDefaultRadio(radio, 'activity')
      }

      setDefaultRadio = (elements, name) => {
         const defaultEl = elements.filter(el => el.getAttribute('name') === name)[0]
         const value = defaultEl.getAttribute('value')

         defaultEl.setAttribute('checked', true)
         this.setValue(name, value)
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

      onChangeRadio = (e) => {
         const { name, value } = e.target
         this.setValue(name, value)
      }

      onSubmit = (e) => {
         e.preventDefault();
         this.validate(this.state);
      }

      validate = (obj) => {
         const { fields, errors } = obj

         const isValidate = Object.entries(fields).forEach(([key, val]) => {
            if (this.checkValue(key, val)) {
               this.setError(key, '')
            }
         })

         const hasError = Object.values(errors).every(error => error.trim() !== '')
         if (!hasError) return console.error('not valide value')
      }

      checkValue = (key, val) => {
         switch (key) {
            case 'gender':
               return this.isEmpty(key, val, 'check your gender')
            case 'age':
               return this.isEmpty(key, val, 'age is empty') && this.isNumber(key, val, 'age is not a number')
            case 'weight':
               return this.isEmpty(key, val, 'weight is empty') && this.isNumber(key, val, 'weight is not a number')
            case 'growth':
               return this.isEmpty(key, val, 'growth is empty') && this.isNumber(key, val, 'growth is not a number')
            case 'activity':
               return this.isEmpty(key, val, 'check your activity')
            default:
               return true
         }
      }

      setError = (key, msg) => {
         this.setState((state) => {
            return {
               errors: {
                  ...state.errors,
                  [key]: msg
               }
            }
         })
      }

      isNumber = (key, val, msg) => {
         if (isNaN(val)) {
            this.setError(key, msg)
            return false
         }
         return true;
      }

      isEmpty = (key, val, msg) => {
         if (val.trim() === '') {
            this.setError(key, msg)
            return false
         }
         return true;
      }
      render() {
         console.log(this.state);
         return <View {...this.state} onChangeRadio={this.onChangeRadio} onSubmit={this.onSubmit}/>
      }
   }
}

export default withValidate